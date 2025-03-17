const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');

const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {this.users = data}
};

const handleLogin = async (req, res) => {

    const {user, pwd} = req.body;
    if (!user || !pwd) return res.status(400).json({'message': 'Username and password are required.'});

    // Find the current user by matching the username 
    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); // User not found
    
    // Check for a password match
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        // Create JWTs

        // Access Token
        // The roles information is passed in the access token.
        // It is safe here since the access token will only be stored in memory.
        // The roles information isn't passed as the actual value, but as a number.
        // These values don't need to be passed into the refresh token since, 
        // the refresh token is there just to ensure that another access token can be granted.
        const accessToken = jwt.sign(
            {   
                
                'userInfo': {
                'username': foundUser.username,
                'roles': roles
                
                }

            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '600s'}
        );

        // Refresh Token
        const refreshToken = jwt.sign(
            {'username': foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

        // SETTING CURRENT USER
        // Find all other users other than current user in usersDB.
        const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
        // Create the currentUser object consisting of foundUser and refreshToken.
        // Here, we use the spread operator to combine foundUser and refreshToken into a single object, currentUser.
        const currentUser = { ...foundUser, refreshToken};
        // Add the currentUser object to the users database.
        usersDB.setUsers([...otherUsers, currentUser]);
        
        // Write the usersDB to the file
        await fsPromises.writeFile(
            filePath = path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );

        // The refresh token is sent as an HTTP-Only Cookie.
        // It isn't accessible using JS.
        // Its maximum age is set to a day. 
        // It is set in milliseconds.
        res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

        // Send the access token as JSON 
        // This access token will be stored only in memory.
        res.json({accessToken});
    } else {
        res.sendStatus(401);
    }
};

module.exports = { handleLogin };