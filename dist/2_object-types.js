"use strict";
// ============
// OBJECT TYPES
// ============
// Object parameters
// =================
const dog = {
    name: "Linus",
    breed: "Pugalier",
    age: 16
};
const getDog = (thisDog) => {
    return `${thisDog.name}, ${thisDog.breed}, ${thisDog.age}`;
};
console.log(getDog(dog));
// Object return type
// ==================
const randomCoordinate = () => {
    return {
        x: Math.random(),
        y: Math.random()
    };
};
console.log(randomCoordinate);
const doubleIt = (point) => {
    return {
        x: point.x * 2,
        y: point.y * 2
    };
};
const doubleItParams = {
    point: {
        x: 2,
        y: 3
    }
};
console.log(doubleItParams);
const myMiata = (car) => {
    return `My Miata is a ${car.year} ${car.model} with ${car.transmission.gears} speed ${car.transmission.type} transmission`;
};
// Note optional hardtop param not included.
const car = myMiata({
    model: 'NB',
    year: 2000,
    transmission: {
        type: 'manual',
        gears: 6
    }
});
const fancyCircle = {
    radius: 3.141592654,
    color: '#c00000'
};
const prettiestCircle = {
    radius: 3.141592654,
    color: '#c00000',
    fill: '#ffffff'
};
