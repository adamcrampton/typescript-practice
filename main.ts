 // Primatives + declarations
 let testString: string = "A test string"; // Cannot assign a value other than a string or access a property/method.
 let testNumber: number = 72;
 let testBoolean: boolean = true;
 
 // Note: Type inference is totally valid, so annotations are not actually required.
let anotherTestString = "Another one"; // Still need to maintain the type otherwise error is thrown.

// "any type" (not a great idea in most circumstances).
// Note: Still not callable if initialised with a non-function value.
let anything:any = "Anything";
anything = 5;

// Using annotations is good practice when initialising variables without values.
const testArray = ["item 1", "item 2", "item 3", "item 4"];

let initted: string;

for (const key in testArray) {
    if (Object.prototype.hasOwnProperty.call(testArray, key)) {
        if (testArray[key] === "item 3") {
            initted = testArray[key];
        }
    }
}

