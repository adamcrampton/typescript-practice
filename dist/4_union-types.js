"use strict";
// ===========
// UNION TYPES
// ===========
// Multiple types in declaration
// =============================
let age = 21;
age = 23;
age = "24";
// Initialize with unioned types.
let coOrds;
// This works.
coOrds = {
    x: 1,
    y: 34
};
// This also works (note property names).
coOrds = {
    latitude: 1,
    longitude: 34
};
// Union types with functions
// ==========================
const printAge = (age) => {
    console.log(`You are ${age} years old`);
};
// These both work
printAge(22);
printAge("23");
// Type narrowing
// ==============
const calculateTax = (price, tax) => {
    // Even though both types are accepted, an error will be thrown in TS
    // if the typeof check doesn't wrap the replace. 
    // This is to prevent any possibility of an error being thrown in compiled code.
    if (typeof price === "string") {
        price = price.replace("$", "");
    }
    else {
        return price * tax;
    }
};
// Union types & arrays
// ====================
// Type is an array that contains numbers and/or strings.
const mixed = [
    'some text', 34, "56"
];
// Literal types
// =============
let zero;
let hello;
// Only really useful when used with union types.
let mood;
mood = "Sad";
const giveAnswer = (answer) => {
    return `The answer is ${answer}`;
};
const theAnswer = giveAnswer("yes");
