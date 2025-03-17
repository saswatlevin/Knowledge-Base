const fs = require('fs');


if(!fs.existsSync('./new')){
	fs.mkdir('./new', (err) => {
		if (err) throw err;
		console.log('Directory created');
	});
}

// Code to delete a directory
if(!fs.existsSync('./new')){
	fs.rmdir('./new', (err) => {
		if (err) throw err;
		console.log('Directory removed');
	});
}

// exit on uncaught errors
// Listen for the errors and catch them
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: : ${err}`);
    process.exit(1);
});

// Stopped at 00:50:02