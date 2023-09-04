"use strict";
// ==========
// INTERFACES
// ==========
// Almost the same thing as type aliases, with different syntax - 3 main differences
// - Can only set the "shape" of an object (must be an object)
// - Only interfaces can be reopened
// - Only interfaces can be extended
const usePersonType = (thisPerson) => {
    return `Your name is ${thisPerson.name}, you are ${thisPerson.age} years old`;
};
;
const getPersonName = (person) => {
    return `Your name is ${person.name}, you are ${person.age} years old`;
};
const linus = {
    id: 123,
    first: "Linus",
    sayHello: (name) => { return `Hello ${name}`; },
    sayHi: (name) => { return `Hi ${name}`; }
};
const person = {
    name: 'Farfel',
    age: 3
};
const myDog = {
    name: 'Farfel',
    age: 3,
    breed: 'Cavoodle'
};
