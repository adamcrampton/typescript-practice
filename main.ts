 // Primatives + declarations
 // =========================
 let testString: string = "A test string"; // Cannot assign a value other than a string or access a property/method.
 let testNumber: number = 72;
 let testBoolean: boolean = true;
 
 // Type inference and "any"
 // ========================
 // Note: Type inference is totally valid, so annotations are not actually required.
let anotherTestString = "Another one"; // Still need to maintain the type otherwise error is thrown.

// "any type" (not a great idea in most circumstances).
// Note: Still not callable if initialised with a non-function value.
let anything:any = "Anything";
anything = 5;

// Variable annotations
// ====================
const testArray = ["item 1", "item 2", "item 3", "item 4"];

let initted: string;

for (const key in testArray) {
    if (Object.prototype.hasOwnProperty.call(testArray, key)) {
        if (testArray[key] === "item 3") {
            initted = testArray[key];
        }
    }
}

// Parameter types
// ===============
const squared = (num: number = 63) => {
    return num * num;
}

// Return type annotations
// =======================
// Note; Inference is used in absence of specified type.
const myName = (name: string = "Mario"): string => {
    return `Your name is ${name}`;
}

// Union return types.
const myThing = (testValue: number = 10): number | string => {
    return testValue < 10 ? 'Too low' : testValue;
}

// Void is valid in TypesScript as a return type.
const doSomething = (action: string = "Action"): void => {
    console.log(`The action is ${action}`);
}

