// ==========
// INTERFACES
// ==========
// Almost the same thing as type aliases, with different syntax - 3 main differences
// - Can only set the "shape" of an object (must be an object)
// - Only interfaces can be reopened
// - Only interfaces can be extended
var usePersonType = function (thisPerson) {
    return "Your name is ".concat(thisPerson.name, ", you are ").concat(thisPerson.age, " years old");
};
;
var getPersonName = function (person) {
    return "Your name is ".concat(person.name, ", you are ").concat(person.age, " years old");
};
var linus = {
    id: 123,
    first: "Linus",
    sayHello: function (name) { return "Hello ".concat(name); },
    sayHi: function (name) { return "Hi ".concat(name); }
};
var person = {
    name: 'Farfel',
    age: 3
};
var myDog = {
    name: 'Farfel',
    age: 3,
    breed: 'Cavoodle'
};
