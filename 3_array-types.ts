// ===========
// ARRAY TYPES
// ===========
// Note: It's important to cast the array type when initializing - to specify what type the array contents should be.
// Otherwise the array contents will receive an 'any' type.
const anArray: string[] = [];

// Array of strings
// ================
const users: string[] = ['Adam', 'Amy'];
users.push('Maddy');

// Alternate syntax.
const altUsers: Array<string> = ['Linus', 'Farfel'];
altUsers.push('Blanka');

// Array of numbers
// ================
const ages: number[] = [3, 12, 16];
ages.push(22);

// Alternate syntax.
const altAges: Array<number> = [4, 13, 17];
altAges.push(23);

// Using types
// ===========
type Point = {
    x: number,
    y: number
}

const coOrds: Point[] = []; // Must receive an array of "Point" type values.
coOrds.push({x: 4, y: 5});

// Multidimensional arrays - number of brackets = depth of array
// =============================================================
const ticTacToeBoard: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
];

// Use as function parameter.
type Product = {
    name: string,
    price: number
};

const getTotal = (products: Product[]): number => {
    let total = 0;
    
    for (let product of products) {
        total += product.price;
    }
    
    return total;
}