// Primatives + declarations
var testString = "A test string"; // Cannot assign a value other than a string or access a property/method.
var testNumber = 72;
var testBoolean = true;
// Note: Type inference is totally valid, so annotations are not actually required.
var anotherTestString = "Another one"; // Still need to maintain the type otherwise error is thrown.
// "any type" (not a great idea in most circumstances).
// Note: Still not callable if initialised with a non-function value.
var anything = "Anything";
anything = 5;
// Using annotations is good practice when initialising variables without values.
var testArray = ["item 1", "item 2", "item 3", "item 4"];
var initted;
for (var key in testArray) {
    if (Object.prototype.hasOwnProperty.call(testArray, key)) {
        if (testArray[key] === "item 3") {
            initted = testArray[key];
        }
    }
}
// Using parameter types.
var squared = function (num) {
    return num * num;
};
var myName = function (name) {
    if (name === void 0) { name = "Mario"; }
    return "Your name is ".concat(name);
};
