// ==============
// TUPLES & ENUMS
// ==============

// Tuples - An array type with a fixed length + types
// ===================================================
// e.g. First element has to be an string, second element a string, third element a number.
// Note: This is similar but not the same as union types - with tuples, you need to specify the order of the items and length of the array.
let myTuple: [string, string, number];
myTuple = ['hello', 'world', 23];

// Use as a type.
type HttpResponse = [number, string];
const validRes: HttpResponse = [200, "OK"];

// Use as an array of this type.
const validResponses: HttpResponse[] = [
    [200, 'OK'],
    [400, 'Bad Request'],
    [500, 'Server Error']
];

// Tuple quirk - you can push elements to the array of any type after tuple has been initially declared.
validRes.push('extra item');

// Enums - specified list of required values (constants)
// =====================================================
// Note: Best to have values formatted as constants.
enum ValidResponseEnum {
    OK, BADREQUEST, NOTFOUND, TOOMANYREQUESTS, SERVERERROR
}

const enumStatus = ValidResponseEnum.NOTFOUND;

// Enum as parameter.
enum OrderStatus {
    PENDING, SHIPPED, DELIVERED, RETURNED
}
const isDelivered = (status: OrderStatus) => {
    return status === OrderStatus.DELIVERED;
}
const checkedOrder = isDelivered(OrderStatus.RETURNED); // false

// Assigning values to enums.
enum arrowKeys {
    UP = "up", 
    DOWN = "down", 
    LEFT = "left", 
    RIGHT = "right"
}

const left = arrowKeys.LEFT; // "left"


