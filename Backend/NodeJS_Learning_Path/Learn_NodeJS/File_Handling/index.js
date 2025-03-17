/** FILE HANDLING */
const fs = require('fs');
const path = require('path');

// File handling functions do not execute synchronously.
// The readFile function waits for the data to come from the file
// In the meantime, other statements are executed.
// This is somewhat like the "async" and "await" combination.
// The data from the file is displayed when it has arrived.
// Instead of hardcoding the path. it can be gotten by path.join(__dirname, 'files', 'starter.txt')
fs.readFile('./files/starter.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 


// File handling functions do not execute synchronously.
// They "wait" till they get their result.
// In the meantime, other statements are executed.
fs.writeFile('./files/reply.txt', 'Text To Be Written [1]', (err) => {
    if (err) throw err;
    console.log('Write Successfully Completed.');
});


 fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nText To Be Written [2]', (err) => {
    if (err) throw err;
    console.log("Append Successfully Completed.");
});

// In order to ensure that file handling operations take place in the desired order,
// We must put the respective file handling functions inside each other in that order.
// In the example below, we want to write and append to files.
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Text To Be Written', (err) => {
    if (err) throw err;
    console.log('Write Successfully Completed.');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nText To Be Written', (err) => {
        if (err) throw err;
        console.log("Append Successfully Completed.");
    });
});

console.log('Hello...');

// exit on uncaught errors
// Listen for the errors and catch them
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: : ${err}`);
    process.exit(1);
});

// Stopped at 00:26:34
