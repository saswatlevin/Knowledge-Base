const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Creates an object an exports these functions out of this file
module.exports = {
    add,
    subtract,
    multiply,
    divide
}

// Instead of exporting as above, it can be done as:
// exports.add = (a, b) => a + b;
// exports.subtract = (a, b) => a - b;
// exports.multiply = (a, b) => a * b;
// exports.divide = (a, b) => a / b;