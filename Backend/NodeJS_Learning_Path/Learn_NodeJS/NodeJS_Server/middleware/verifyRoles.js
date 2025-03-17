const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // If no request, then return Unauthorized
        if (!req?.roles) return res.sendStatus(401);
        // Array of allowed roles that were passed in the access token.
        const rolesArray = [...allowedRoles];
        console.log(rolesArray);
        console.log(req.roles);
        // Comparing roles
        // ?? -> Too Abstract
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
        if (!result) return res.sendStatus(401);
        next();
    }
}