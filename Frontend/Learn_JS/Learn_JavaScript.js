// Inline Comment

/* Multiline 
 *
 * Comment */

// A line of code in JS can optionally be terminated by a semicolon. 

/** DATA TYPES AND VARIABLES **/
// The data types in JS are: undefined, null, boolean, string, symbol, number and object.

// A variable is like a box that can contain data of any type.
// There are 3 ways to declare variables in JS: var, let and const

// A variable declared using var is valid throughout the entire program.
var variable1 = 1;
// A variable declared using let is valid only in the current scope.
let variable2 = "myStr";
// A variable declared using const can never change its value.
const pie = 3.14;

// The data type doesn't need to be mentioned in a variable declaration.

/** STORING VALUES WITH ASSIGNMENT OPERATOR **/

// scrimba.com is a website that allows you to learn how to code. 

// Variable names and function names are case sensitive.

/** ARITHMETIC OPERATORS **/
// +  -> Addition
// -  -> Subtraction
// *  -> Multiplication
// /  -> Division
// ++ -> Increment
// -- -> Decrement


//Shorthand Operators
// += -> Shorthand Addition Operator
// -= -> Shorthand Subtraction Operator
// *= -> Shorthand Multiplication Operator
// /= -> Shorthand Division Operator

/** STRINGS **/
// Strings can be enclosed in single-quotes or double-quotes.
// If quotes need to be used inside a doublequoted string, then an escape character (\) must be used before the quotes.
// If a string is enclosed in single quotes, then double quotes can be used without escape sequences inside the string.
// If a string is enclosed in back-ticks (``), then both single and double quotes can be used inside the string without escape sequences.


var Str2 = "This is a word in \"quotes\".";
var Str3 = '<a href = "http://www.example.com" target = "_blank">Link</a>';
var Str4 = `This is a 'value' and this is another "value".`

//Other Escape Sequences in Strings
// \n -> Newline
// \r -> Carriage Return
// \t -> Tab
// \\ -> Backslash 


//String Concatenation
// Strings can be concatenated by using the + operator or the += operator.

var Str5 = "AB ";
var Str6 = "CD";
console.log(Str5 + Str6) // O/P -> AB CD

Str7 = " EF"
Str6 += Str7 // Str7 now contains the string CD EF 

//Finding string length
// The length of a string can be found out using the length attribute.
console.log(Str5.length); // O/P -> 3 

//Strings are immutable. This means that a string once created cannot be changed. If we "change" an existing string, then we are creating a new string.

Str7 = "GH";

// Strings can be indexed.
// The index of the first character in a string is 0. 
console.log(Str7[0]);

// Get the last literal in a string
console.log(Str7[Str7.length - 1]);

// Strings cannot be changed by assigning them values at indivdual indices.

/** FUNCTIONS **/
function wordBlanks(noun, adjective, verb, adverb) {
    var result = "";
    result = "The " + adjective + " " + noun + " " + verb + " " + "to the store " + adverb;

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

/** ARRAYS **/
// In JS, an Array is a data structure that contains elements of different data types.
// Arrays can be indexed. Each array element is assigned a unique index number.
// The index of the first element in an array is 0.
// Each array element can be accessed by its index. 
// Individual elements in an array can be modified using their indices.
// It is possible to have nested arrays.

// The push() function adds an element to the end of the array.
// The pop() function removes an element from the end of the array and returns it.
// The shift() function is used to remove an element from the beginning of the array.
// The unshift() function is used to replace the first element of the array.

var myArray = ["string", 31, "abcd", 2.19];
myArray[1] = 40; // myArray is now ["string", 31, "abcd", 2.19]
arrayTwo = [[1, 2, 3], [4, 5, 6]];

console.log(arrayTwo[1][2]); // O/P -> 6

myArray.pop(); // myArray is now ["string", 31, "abcd"]
myArray.push(4.02); // myArray is now ["string", 31, "abcd", 4.02]
myArray.shift(); // myArray is now [31, "abcd", 4.02]
myArray.unshift(6); // myArray is now [6, "abcd", 4.02]



// Stopped at 57:56.