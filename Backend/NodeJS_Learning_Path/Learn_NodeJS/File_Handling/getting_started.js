// Node Runs on a Server - not a browser.
// The console is the terminal window.
// The "global" object is used instead of the "window" object.
// Has CommonJS Modules (OS, file system, etc) instead of ES6 Modules.
// Doesn't have "fetch" API.

//CommonJS Syntax

//Imports
const os = require('os');
const path = require('path');
const math = require('./math.js');
// We can also import a single function / multiple functions through destructuring
//const math = {add};
//const math = {add, subtract, multiply, divide};


// Get info related to OS
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// Get abs path to directory
console.log(__dirname);
// Get abs path to file
console.log(__filename);

// Get absolute path to dir
console.log("dirname: " + path.dirname(__filename));
// Get file name only
console.log("filename: " + path.basename(__filename));
// Get extension name of file only
console.log("extname: " + path.extname(__filename));
// Get object with root, dir, base, ext and name values of the absolute path
console.log("parse:");
console.log(path.parse(__filename));

//Using the math functions
console.log(math.add(2, 3));
console.log(math.subtract(2, 3));
console.log(math.multiply(2, 3));
console.log(math.divide(2, 3));