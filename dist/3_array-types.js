"use strict";
// ===========
// ARRAY TYPES
// ===========
// Note: It's important to cast the array type when initializing - to specify what type the array contents should be.
// Otherwise the array contents will receive an 'any' type.
const anArray = [];
// Array of strings
// ================
const users = ['Adam', 'Amy'];
users.push('Maddy');
// Alternate syntax.
const altUsers = ['Linus', 'Farfel'];
altUsers.push('Blanka');
// Array of numbers
// ================
const ages = [3, 12, 16];
ages.push(22);
// Alternate syntax.
const altAges = [4, 13, 17];
altAges.push(23);
let coOrds2 = []; // Must receive an array of "Point" type values.
coOrds2.push({ x: 4, y: 5 });
// Multidimensional arrays - number of brackets = depth of array
// =============================================================
const ticTacToeBoard = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
];
const getTotal = (products) => {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
};
