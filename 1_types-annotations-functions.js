// ================================
// TYPES, ANNOTATIONS AND FUNCTIONS
// ================================
// Primatives + declarations
// =========================
var testString = "A test string"; // Cannot assign a value other than a string or access a property/method.
var testNumber = 72;
var testBoolean = true;
// Type inference and "any"
// ========================
// Note: Type inference is totally valid, so annotations are not actually required.
var anotherTestString = "Another one"; // Still need to maintain the type otherwise error is thrown.
// "any type" (not a great idea in most circumstances).
// Note: Still not callable if initialised with a non-function value.
var anything = "Anything";
anything = 5;
// Variable annotations
// ====================
var testArray = ["item 1", "item 2", "item 3", "item 4"];
var initted;
for (var key in testArray) {
    if (Object.prototype.hasOwnProperty.call(testArray, key)) {
        if (testArray[key] === "item 3") {
            initted = testArray[key];
        }
    }
}
// Parameter types
// ===============
var squared = function (num) {
    if (num === void 0) { num = 63; }
    return num * num;
};
// Return type annotations
// =======================
// Note; Inference is used in absence of specified type.
var myName = function (name) {
    if (name === void 0) { name = "Mario"; }
    return "Your name is ".concat(name);
};
// Union return types.
var myThing = function (testValue) {
    if (testValue === void 0) { testValue = 10; }
    return testValue < 10 ? 'Too low' : testValue;
};
// Void is valid in TypesScript as a return type.
var doSomething = function (action) {
    if (action === void 0) { action = "Action"; }
    console.log("The action is ".concat(action));
};
// Type is inferred on anon functions.
var colors = ["red", "green", "yellow", "blue", "purple", "orange"];
var uppers = colors.map(function (color) {
    return color.toUpperCase();
});
// "never" return type - when a function should never return anything.
// This function is either running perpetually (e.g. loop in game engine) or throwing an exception.
var makeError = function (message) {
    throw new Error(message);
};
