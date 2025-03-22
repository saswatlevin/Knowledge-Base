// Inline Comment

/* Multiline 
 *
 * Comment */

// A line of code in JS can optionally be terminated by a semicolon. 

/** DATA TYPES AND VARIABLES **/
// The data types in JS are: undefined, null, boolean, string, symbol, number and object.

// A variable is like a box that can contain data of any type.
// There are 3 ways to declare variables in JS: var, let and const

// A variable declared using var is valid throughout the entire program if declared outside a function.
// A variable declared using var is valid throughout the entire program even if it was declared inside a block.
// A variable declared using var is valid only throughout the function if declared inside it.
// More than 1 variable with the same name can be declared in the same scope using var.
// A variable declared without keyword is valid throughout the entire program if declared outside a function.
// A variable declared without keyword is valid only throughout a function if declared inside it. 

// A variable declared with const has the same scope as that of a variable declared with let.

var variable1 = 1;
// A variable declared using let is valid only in the current scope. Two variables with the same name can't be declared using let in the same scope.
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


/** FUNCTIONS **/
// Functions contain code that can be reused.
// Some functions take arguments.
// Parameters in a function call are the values that're passed to the arguments.

function fnWithArgs(a, b) {
    console.log(a + b);
}

fnWithArgs(1, 4);
fnWithArgs(2, 6);

/** SCOPE **/
// Scope refers to the visibility of variables.
// Variables that're defined outside of a function block have Global scope.
// If a variable is defined without the var keyword, then its scope is Global, regardless of the code block in which it is declared.
// If a variable is declared with the var keyword inside a code block, then its scope is Local and limited to within that code block. 

// In the example below, since oopsGlobal is defined wothout the var keyword, so its scope is Global.

var myGlobal = 10;
function fun1() {
    // Assign 5 to oopsGlobal here.
    oopsGlobal = 5;
} 

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal " + myGlobal;
    }

    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal " + oopsGlobal;
    }

    console.log(output);
}

fun1();
fun2();

// In the function localScope, the variable myVar has Local scope, i.e., it is visible only inside the function block.
// This is because myVar is declared with the var keyword.

function localScope() {
    var myVar;
    myVar = 4;
    console.log(myVar);
}


// Local variables overide Global variables of the same name.
var outerWear = "T-Shirt";
function myOutfit() {
    
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit()); // O/P -> sweater
console.log(outerWear);  // O/P -> T-Shirt

// A returned value from a function can be assigned to another variable.
var result = myOutfit();

/** SIMPLE QUEUE SIMULATION **/
function nextInLine(arr, item) {
    // Insert at the rear of the queue
    arr.push(item);

    // Delete at the front of the queue
    return arr.shift();
}

var test_arr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(test_arr));
console.log(nextInLine(test_arr, 6));
console.log("After: " + JSON.stringify(test_arr));

/** RELATIONAL OPERATORS **/
// Equality Operator (==) -> Evaluates to true if both operands are of the same value but may be of different data types (Eg- 3 == "3" -> true; 3 == 3 -> true)
// Strict Equality Operator (===) -> Evaluates to true only if both operands are of the same value and must be of the same data type (Eg- "3" === "3" -> true; 3 === "3" -> false)
// Inequality Operator (!=) -> Evaluates to true if both operands are not of the same value but of the same data type (Eg- 3 != "3" -> true; 3 != 3 -> true)
// Strict Inequality Operator (!==) -> Evaluates to true if both operands are of the same value and the same type (Eg- 3 != 3 -> true)
// Greater Than Operator (>)
// Greater Than or Equal To Operator (>=)
// Less Than Operator (<)
// Less Than or Equal To Operator (<=) 

/** LOGICAL OPERATORS **/
// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)

/** IF / ELSE STATEMENT **/
// If Statement -> If the condition in the if statement evaluates to true, then the code under it is executed.
// Else Statement -> If the condition in the corresponding if statement evaluates to false, then the code under this statement is executed. 

var num_1 = 10;
var num_2 = 20;

if (num_1 < num_2) {
    console.log(JSON.stringify(num_1) + " less than " + JSON.stringify(num_2));
}

else {
    console.log(JSON.stringify(num_1) + " greater than or equal to " + JSON.stringify(num_2));
}

//If - Else Ladder
function testIfElse(num_1, num_2) {
    if (num_1 > num_2) {
        return JSON.stringify(num_1) + " > " + JSON.stringify(num_2); 
    }

    else if (num_1 < num_2) {
        return JSON.stringify(num_1) + " < " + JSON.stringify(num_2); 
    }

    else {
        return JSON.stringify(num_1) + " = " + JSON.stringify(num_2); 
    }
}

// In the If-Else ladder, the last code block must be under an else.
// Stopped at 01:22:29.

// Write Chained If-Else Statements to fulfill the following conditions
// num <  5  -> return "Tiny"
// num <  10 -> return "Small"
// num <  15 -> return "Medium"
// num <  20 -> return "Large"
// num >= 20 -> return "Huge"

function testSize(num) {
    if (num >= 20) {
        return "Huge";
    }

    else if (num < 20) {
        return "Large";
    }

    else if (num < 15) {
        return "Medium";
    }

    else if (num < 10) {
        return "Small";
    }

    else if (num < 5) {
        return "Tiny";
    }

    else {
        return "Really Tiny";
    }
}

console.log(testSize(16));

/** SWITCH STATEMENT **/

// Switch(variable) {
// case value_1: code_statement_1;
//   break;

// case value_2: code_statement_2;
//   break;

// case value_3: code_statement_3;
//   break;

//   .
//   .
//   .

// case value_n: code_statement_n;
//   break;
    
//  default: code_statement_n_+_1;
// }

//Returning a boolean value from a function
function isLess(a, b) {
    return (a < b);
}

var result2 = isLess(3, 4);
console.log(result2);

/** OBJECTS **/
// The name of the object is ourDog.
// Its properties are: name, legs, tail and friends. 
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tail": 1,
    "friends": ["everything!"]
};

//Accessing Object Properties
// There are 2 ways to access object properties: dot notation and bracket notation.
// Object properties can only be accessed by bracket notation if the said properties have a space in them.

console.log(ourDog.name);
console.log(ourDog.legs);
console.log(ourDog.tail);
console.log(ourDog.friends);

console.log(ourDog["name"]);
console.log(ourDog["legs"]);
console.log(ourDog["tail"]);
console.log(ourDog["friends"]);

var playerObject = {
    "Player Name": "Montana",
    "Player Number": 16,
};

console.log(playerObject["Player Name"]);
console.log(playerObject["Player Number"]);

//Using a variable to access an object property
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

//Updating Object Properties
// Object properties can be updated using the dot notation.
ourDog.name = "Happy Camper";

//Adding New Properties to Object
// New properties can be added to an object using either the bracket notation or the dot notation. 
ourDog.bark = "woof";
playerObject["Player Team"] = "Red Sox";

//Deleting properties from an object
// Properties can be delted from an object using delete <object>.<property_name>;
delete ourDog.tails;

//The hasOwnProperty(property) function
// It is possible to check whether an object has a certain property using the hasOwnProperty(property) function.
// This function returns true if the property is present in the object and false otherwise.

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }

    else {
        return "Not Found";
    }
    
    return "Change Me!";
}

console.log(checkObj("gift"));

// NOTE: Objects can be included in arrays and even defined inside arrays.

//Nested Objects
// A nested objectis an object that is defined inside another object.
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passengeer seat": "crumbs"
        },

        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//Accessing objects in arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },

    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].trees[1];
console.log(secondTree);


/** LOOPS **/
// Loops are used to repeat an instruction or a series of instructions.
var ourArray = [];
var myArray = [];
var index = 0;

//While Loop
while (index < 5) {
    ourArray.push(index);
    index++;
}

console.log(ourArray); //O/P -> [0, 1, 2, 3, 4]

//For Loop
for (var index = 0; index < 5; ++index) {
    myArray.push(index);
}

console.log(myArray); //O/P -> [0, 1, 2, 3, 4]

//Iterate through an array with a for loop
// Arrays also have a length property that returns their length.
var myArr2 = [7, 8, 9, 10];
var result3 = 0;

for(var i = 0; i < myArr2.length; ++i) {
    result3 = result3 + myArr2[i];
}

console.log("result3 " + result3);

// The Math.random() function returns a random number between 0 and 1.
function randomFraction() {

    return Math.random();
}


console.log(randomFraction());

// A technique to generate random whole numbers between 0 and N-1 is given below:
var num = 10;
var randNum = Math.floor(Math.random() * num);

//The parseInt(string, radix) function converts a string value to an integer. The default radix is 10. It can also convert other non-integer numeric values to an integer.

var result4 = parseInt("56", 10);
console.log(result4); //O/P -> 56
var result5 = parseInt("1001", 2); 
console.log(result5); //O/P -> 9

// The "use strict"; string is used to run the JS interpreter in strict mode to avoid common coding errors and unsaved actions.

//Comparing the Scopes of the var and let Keywords
function checkScopeOne() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("block scope i is ", i);

    }
    console.log("function scope i is ", i);
    return i;
}

checkScopeOne(); //O/P -> block scope of i is block scope
                 //    -> function scope of i is block scope      

console.log(checkScopeOne());
// Stopped at 02:45:02

// Arrays declared with const can be mutated by individually assigning new elements.
// However, mutation can't be done by assigning the const array with a completely new array.

const cArr = [1, 2, 4];
cArr[0] = 2;
cArr[1] = 1; 
cArr[2] = 4;

console.log(cArr); //O/P -> [2, 1, 4]

/** FREEZING CONST OBJECTS **/
// A const object can be modified despite being declared as a const.
// This can be done using the Object.freeze(object) function.

function fnObj() {
    "use strict";
    const MATH_CONSTANTS {
        PI: 3.14
    };

    try {
        MATH_CONSTANTS.PI = 99;
    }

    catch (ex) {
        console.log(ex);
    }

    return MATH_CONSTANTS.PI;
}

console.log(fnObj()); // O/P > 99

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS {
        PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    }

    catch (ex) {
        console.log(ex);
    }

    return MATH_CONSTANTS.PI;
}

console.log(freezeObj()); //O/P -> Error

/** ANONYMOUS FUNCTIONS AND ARROW FUNCTIONS **/

// A function without a name is called an Anonymous Function in JS.
// An anonymous function can always be converted into an Arrow Function.
// An Arrow Function allows a function to be defined very concisely.


var magic = function() {
    return new Date();
};

// This can be shortened further
var magic = () => {
    return new Date();
};

// This is the shortest form of this function.
// A function can be shortened to this form only if it needs to return a single value.
const magic = () =>  new Date();

// Creating an arrow function with arguments from a normal function with arguments.
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

var myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// An arrow function is best used if a function is to be passed to another function as an argument.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num = () => Number.isInteger(num) && num > 0).map(x = () => x * x);
    return squaredIntegers;
};

const squaredIntegers = SquareList(realNumberArray); 

//Higher Order Arrow Functions
// Arrow functions can have default arguments. Here, value = 1 is a default argument. 
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5, 2)); // O/P -> 7
console.log(increment(5)); // O/P -> 6

/** THE REST OPERATOR **/
// The rest operator is ...
// Its use means that any number of arguments can be passed to a function.
// The reduce() function adds numbers together.
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };

})();

/** THE SPREAD OPERATOR **/
// The Spread Operator looks just like the Rest Operator (...).
// It can only be used in an individual function on array elements.
// It expands (spreads out) all the elements of an array.
// It can be understood as doing a Deep Copy of an array.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();
console.log(arr2); // O/P -> JAN, FEB, MAR, APR, MAY

/** DESTRUCTURING ASSIGMENT TO ASSIGN VARIABLES FROM OBJECTS **/
var voxel = {x: 3.6, y: 7.4, z: 6.54};
//Old way of getting values
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//Getting values using Destructuring Syntax
const {x: a, y: b, z: c} = voxel;
// The destructuring syntax is to be interpreted as follows:
// Take the value of x and put it in a.
// Take the value of y and put it in b.
// Take the value of z and put it in c.

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 72.4, max: 85.5}
};


function getMaxOfTmrw(forecast) {
    const {tomorrow: {max: maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}  

console.log(getMaxOfTmrw(LOCAL_FORECAST)); //O/P -> 85.5

/** CONCISE OBJECT LITERAL DESCRIPTIONS USING SIMPLE FILEDS **/
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Jeff Blake", 56, "Male")); //O/P -> Jeff Blake, 56, Male

// The return statement in the above arrow function can be simplified as follows:
const createPerson = (name, age, gender) => ( {name, age, gender} );

console.log(createPerson("Jeff Blake", 56, "Male")); //O/P -> Jeff Blake, 56, Male

/** WRITE CONCISE DECLARATIVE FUNCTIONS **/
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;

    }
};

bicycle.setGear(3);
console.log(bicycle.gear); //O/P -> 3

// This can be shortened to:
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;

    }
};

bicycle.setGear(3);
console.log(bicycle.gear); //O/P -> 3

/** USE A CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION **/

// Old way to create an object
// The SpaceShuttle function is a constructor.
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet); // O/P -> Jupiter

// New way to create an object using class syntax
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet); // O/P -> Jupiter

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

/** CLASSES IN JS **/
//Any variable name beginning with _ in JS is a private variable and can't be accessed outside the class.

class Book {
    constructor(author) {
        this._author = author;
    }

    // getter
    get writer() {
        return this._author;
    }
    
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }

}


//A class can also be defined inside a function.
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = (5/9) * (temp - 32);
        }

        get temperature() {
            return this._temp;
        }

        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp); //O/P -> 26

/** THE DIFFERENCE BETWEEN IMPORT AND REQUIRE **/
// The export keyword is used to make variables, functions, classes or objects available to other modules / scripts.
export const capitalizeString = str => str.toUpperCase();
// To import the capitalizeString arrow function from another file, we would use the following line:
import capitalizeString from "./string_function"; // where "./string_function" is the JS file in the same directory.

/** USE EXPORT TO REUSE A CODE BLOCK **/
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() * string.slice(1);
}

// This is how a function is exported:
export { capitalizeString };

// This is how individual variables are exported:
export const foo = "bar";
export const bar = "foo";

// Everything can be imported

//Stopped at 03:23:37