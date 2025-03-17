/** FILE HANDLING USING ASYNC AWAIT **/
// The below code allows the functions to be executed in the order in which they're called.
// It is a substitute for calling one function inside another.
const fsPromises = require('fs').promises;
const path = require('path');

// The unlink() function can be used to delete a file.
// It is available in the "fs" and "fsPromises" libraries.

const fileOps = async () => {
	try {
		const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
		console.log(data);
		await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
		console.log("Write Complete");
		await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you');
		console.log("Append Complete");
		await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
		console.log("Rename Complete");
		const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
		console.log(newData);
	} catch (err) {
		console.error(err);
	}
};

fileOps();