// ===========
// ARRAY TYPES
// ===========
// Note: It's important to cast the array type when initializing - to specify what type the array contents should be.
// Otherwise the array contents will receive an 'any' type.
var anArray = [];
// Array of strings
// ================
var users = ['Adam', 'Amy'];
users.push('Maddy');
// Alternate syntax.
var altUsers = ['Linus', 'Farfel'];
altUsers.push('Blanka');
// Array of numbers
// ================
var ages = [3, 12, 16];
ages.push(22);
// Alternate syntax.
var altAges = [4, 13, 17];
altAges.push(23);
var coOrds = []; // Must receive an array of "Point" type values.
coOrds.push({ x: 4, y: 5 });
// Multidimensional arrays - number of brackets = depth of array
// =============================================================
var ticTacToeBoard = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
];
var getTotal = function (products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
};
