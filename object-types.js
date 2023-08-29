// ============
// OBJECT TYPES
// ============
// Object parameters
// =================
var dog = {
    name: "Linus",
    breed: "Pugalier",
    age: 16
};
var getDog = function (thisDog) {
    return "".concat(thisDog.name, ", ").concat(thisDog.breed, ", ").concat(thisDog.age);
};
console.log(getDog(dog));
// Object return type
// ==================
var randomCoordinate = function () {
    return {
        x: Math.random(),
        y: Math.random()
    };
};
console.log(randomCoordinate);
var doubleIt = function (point) {
    return {
        x: point.x * 2,
        y: point.y * 2
    };
};
var doubleItParams = {
    point: {
        x: 2,
        y: 3
    }
};
console.log(doubleItParams);
var myMiata = function (car) {
    return "My Miata is a ".concat(car.year, " ").concat(car.model, " with ").concat(car.transmission.gears, " speed ").concat(car.transmission.type, " transmission");
};
// Note optional hardtop param not included.
var car = myMiata({
    model: 'NB',
    year: 2000,
    transmission: {
        type: 'manual',
        gears: 6
    }
});
var fancyCircle = {
    radius: 3.141592654,
    color: '#c00000'
};
var prettiestCircle = {
    radius: 3.141592654,
    color: '#c00000',
    fill: '#ffffff'
};
