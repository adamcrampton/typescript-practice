// ==========
// INTERFACES
// ==========
// Almost the same thing as type aliases, with different syntax - 3 main differences
// - Can only set the "shape" of an object (must be an object)
// - Only interfaces can be reopened
// - Only interfaces can be extended

// Type vs Interface
// =================
// Using Type:
type PersonType = {
    name: string,
    age: number
}

const usePersonType = (thisPerson: PersonType) => {
    return `Your name is ${thisPerson.name}, you are ${thisPerson.age} years old`
}

// Using Interface:
interface Person {
    name: string,
    age: number
};

const getPersonName = (person: Person) => {
    return `Your name is ${person.name}, you are ${person.age} years old`
}

// Readonly + optional Interface properties
// ========================================
interface AnotherPerson {
    first: string,
    readonly last: string, // Readonly
    nickname?: string // Optional
}

// Interface Methods
// =================
// Example using properties, methods, and method parameters.
interface yetAnotherPerson {
    id: number,
    first: string,
    sayHello: (name: string) => string // Closure syntax
    sayHi(name: string): string // Simple syntax
}

const linus: yetAnotherPerson = {
    id: 123,
    first: "Linus",
    sayHello: (name: string) => { return `Hello ${name}` },
    sayHi: (name: string) => { return `Hi ${name}` }
};

// Reopening Interfaces
// ====================
// i.e. Adding new properties (can't be done with Types)
interface ReopenPerson {
    name: string;
}
interface ReopenPerson {
    age: number
}
const person: ReopenPerson = {
    name: 'Farfel',
    age: 3
}

// Extending interfaces
// ====================
// Inheritance
// Note: Extending from multiple is possible by specifying additional parent interfaces.
interface actuallyDog extends Person {
    breed: string
}

const myDog: actuallyDog = {
    name: 'Farfel',
    age: 3,
    breed: 'Cavoodle'
}

