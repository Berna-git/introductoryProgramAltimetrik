// add a comment, only line
/* add multiline comment */


// Variables 3 diferents types of write a variable  

let name = "Bernabee"; // (let) key world of language
const lastName = "Gonzalez" // the difference with let that const refers to values that cannot change
var haveFrineds = 0; // the most obvious, it is not recommended to use it since it can cause problems with the scope

//// ==================== /////


// different data types

typeof undefined // "undefined"
typeof 22 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "berna" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)


// data attribute
const divBatman = document.querySelector("batmanClass");
const value = divBatman.getAttribute("data-name");
console.log(value)

//  Scope

function blokScope() {
    let name = "Berna"// the value of the variable can only be accessed inside the { },
}
console.log(name) // Error, undef

function myFunction() {
    var carName = "Volvo";   // Function Scope
}
console.log(carName) // Sorry! But in global Scope you not have a car :'(

let color = "Green";

function myFunction() {
    console.log(color) // => Green 
}

x = 3.14; // => not Error! Bad practice!

"use strict";
x = 3.14; // This will cause an error


