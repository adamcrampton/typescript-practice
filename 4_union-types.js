// ===========
// UNION TYPES
// ===========
// Multiple types in declaration
// =============================
var age = 21;
age = 23;
age = "24";
// Initialize with unioned types.
var coOrds;
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
var printAge = function (age) {
    console.log("You are ".concat(age, " years old"));
};
// These both work
printAge(22);
printAge("23");
// Type narrowing
// ==============
var calculateTax = function (price, tax) {
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
var mixed = [
    'some text', 34, "56"
];
// Literal types
// =============
var zero;
var hello;
// Only really useful when used with union types.
var mood;
mood = "Sad";
var giveAnswer = function (answer) {
    return "The answer is ".concat(answer);
};
var theAnswer = giveAnswer("yes");
