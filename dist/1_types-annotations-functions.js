"use strict";
// ================================
// TYPES, ANNOTATIONS AND FUNCTIONS
// ================================
// Primatives + declarations
// =========================
let testString = "A test string"; // Cannot assign a value other than a string or access a property/method.
let testNumber = 72;
let testBoolean = true;
// Type inference and "any"
// ========================
// Note: Type inference is totally valid, so annotations are not actually required.
let anotherTestString = "Another one"; // Still need to maintain the type otherwise error is thrown.
// "any type" (not a great idea in most circumstances).
// Note: Still not callable if initialised with a non-function value.
let anything = "Anything";
anything = 5;
// Variable annotations
// ====================
const testArray = ["item 1", "item 2", "item 3", "item 4"];
let initted;
for (const key in testArray) {
    if (Object.prototype.hasOwnProperty.call(testArray, key)) {
        if (testArray[key] === "item 3") {
            initted = testArray[key];
        }
    }
}
// Parameter types
// ===============
const squared = (num = 63) => {
    return num * num;
};
// Return type annotations
// =======================
// Note; Inference is used in absence of specified type.
const myName = (name = "Mario") => {
    return `Your name is ${name}`;
};
// Union return types.
const myThing = (testValue = 10) => {
    return testValue < 10 ? 'Too low' : testValue;
};
// Void is valid in TypesScript as a return type.
const doSomething = (action = "Action") => {
    console.log(`The action is ${action}`);
};
// Type is inferred on anon functions.
const colors = ["red", "green", "yellow", "blue", "purple", "orange"];
const uppers = colors.map((color) => {
    return color.toUpperCase();
});
// "never" return type - when a function should never return anything.
// This function is either running perpetually (e.g. loop in game engine) or throwing an exception.
const makeError = (message) => {
    throw new Error(message);
};
