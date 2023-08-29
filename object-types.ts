// ============
// OBJECT TYPES
// ============
// Object parameters
// =================
const dog = {
    name: "Linus",
    breed: "Pugalier",
    age: 16
}

const getDog = (thisDog: { name: string, breed: string, age: number }) => {
    return `${thisDog.name}, ${thisDog.breed}, ${thisDog.age}`;
}
console.log(getDog(dog));

// Object return type
// ==================
const randomCoordinate = (): { x: number, y: number } => {
    return {
        x: Math.random(),
        y: Math.random()
    };
}
console.log(randomCoordinate);

// Type alias
// ==========
// Use this type for param type and return type.
type DoubleItParamsType = {
    x: number,
    y: number
}

const doubleIt = (point: DoubleItParamsType): DoubleItParamsType => {
    return {
        x: point.x * 2,
        y: point.y * 2
    };
}
const doubleItParams = {
    point: {
        x: 2,
        y: 3
    }
};
console.log(doubleItParams);

// Nested objects, optional and read-only parameters
// =================================================
type Miata = {
    readonly model: string, // Note the *read only* parameter - cannot be written to (arrays & objects can be updated however).
    year: number,
    hardTop?: boolean, // Note the *optional* parameter.
    transmission: {
        type: string,
        gears: number
    }
}

const myMiata = (car: Miata) => {
    return `My Miata is a ${car.year} ${car.model} with ${car.transmission.gears} speed ${car.transmission.type} transmission`;
}

// Note optional hardtop param not included.
const car = myMiata({
    model: 'NB',
    year: 2000,
    transmission: {
        type: 'manual',
        gears: 6
    }
});

// Intersection types
// ==================
// Type aliases can be combined.
type Circle = {
    radius: number
}

type BorderColor = {
    color: string
}

type BorderedCircle = Circle & BorderColor;

const fancyCircle: BorderedCircle = {
    radius: 3.141592654,
    color: '#c00000'
}

// Adding a third alias inline.
type PrettyCircle = Circle & BorderedCircle & {
    fill: string
}

const prettiestCircle = {
    radius: 3.141592654,
    color: '#c00000',
    fill: '#ffffff'
}

