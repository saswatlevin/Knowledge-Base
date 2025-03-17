/** FILE STREAMS **/
const path = require('path');
const fs = require('fs');
// Read Stream
const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), {encoding: 'utf8'});
// Write Stream
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'new_lorem.txt'));

// Write the read data from "rs" to the "ws"
// This divides the data into chunks and writes them as such
rs.on('data', (dataChunk) => {
	ws.write(dataChunk);
});

// Writing through pipes is more efficient
rs.pipe(ws);

// exit on uncaught errors
// Listen for the errors and catch them
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: : ${err}`);
    process.exit(1);
});