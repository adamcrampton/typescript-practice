// ===========
// UNION TYPES
// ===========

// Multiple types in declaration
// =============================
let age: number | string = 21;
age = 23;
age = "24";

// Accept multiple defined types as parameters
// ===========================================
type Point = {
    x: number,
    y: number
};

type Loc = {
    latitude: number,
    longitude: number
};

// Initialize with unioned types.
let coOrds: Point | Loc;

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
const printAge = (age: number | string): void => {
    console.log(`You are ${age} years old`);
}

// These both work
printAge(22);
printAge("23");

// Type narrowing
// ==============
const calculateTax = (price: number | string, tax: number) => {
    // Even though both types are accepted, an error will be thrown in TS
    // if the typeof check doesn't wrap the replace. 
    // This is to prevent any possibility of an error being thrown in compiled code.
    if (typeof price === "string") {
        price = price.replace("$", "");
    } else {
        return price * tax;
    }
}

// Union types & arrays
// ====================
// Type is an array that contains numbers and/or strings.
const mixed: (number | string)[] = [
    'some text', 34, "56"
];

// Literal types
// =============
let zero: 0;
let hello: "hello";

// Only really useful when used with union types.
let mood: "Happy" | "Sad";
mood = "Sad";

// Use as function parameter.
type Answer = "yes" | "no" | "maybe";

const giveAnswer = (answer: Answer) => {
    return `The answer is ${answer}`;
}
const theAnswer = giveAnswer("yes");

