//Comparing the Scopes of the var and let Keywords
function checkScopeOne() {
    var i = "function scope";
    if (true) {
        i = "block scope";   
        console.log("block scope i is ", i);

    }
    console.log("function scope i is ", i);
    return i;
}

console.log("The output of checkScopeOne is", checkScopeOne());
/**O/P ->  block scope i is  block scope
           function scope i is  block scope
           The output of checkScopeOne is block scope 
           Uncaught ReferenceError: i is not defined **/

// Here, in the declaration on line 4, i has function scope and is assigned "function scope".
// Then, in the declaration on line 6, i is assigned "block scope". This means that the value of i is modified.
// Thus, on line 8, "block scope i is  block scope" is printed.
// Thus, on line 12, "block scope i is  block scope" is printed.
// Thus, on line 17, "The output of checkScopeOne is block scope " is printed.


function checkScopeTwo() {
    let i = "function scope";
    if (true) {
       let i = "block scope";
       console.log("block scope i is ", i);
    }

    console.log("function scope i is ", i);
    return i;
}

console.log("The output of checkScopeTwo is", checkScopeTwo());

/** O/P -> block scope i is  block scope
           function scope i is  function scope
           The output of checkScopeTwo is function scope **/

// Here, i is declared with let on line 27 and assigned "function scope". This i has scope throughout the function.
// Then, another i is declared with let on line 29 and assigned "block scope". This i has scope only inside the if block.
// "block scope i is  block scope" is printed on line 30 since the i inside the if block (local i) overrides the i outside the block (function i).
// Thus, "function scope i is  function scope" is printed on line 30.

 
 num1 = 10;
 if (num1 <= 10) {
    num2 = 20;
 }
 console.log("num2 is", num2);

 // O/P -> num2 is 20
 
 /**
 let num1 = 10;
 if (num1 <= 10) {
    var num2 = 20;
 } 
  O/P -> Error 
 **/

/**
 let num1 = 10;
 if (num1 <= 10) {
    num2 = 20;
 }
 console.log("num2 is", num2);
 O/P -> num2 is 20
 **/