// ==============
// TUPLES & ENUMS
// ==============
// Tuples - An array type with a fixed length + types
// ===================================================
// e.g. First element has to be an string, second element a string, third element a number.
// Note: This is similar but not the same as union types - with tuples, you need to specify the order of the items and length of the array.
var myTuple;
myTuple = ['hello', 'world', 23];
var validRes = [200, "OK"];
// Use as an array of this type.
var validResponses = [
    [200, 'OK'],
    [400, 'Bad Request'],
    [500, 'Server Error']
];
// Tuple quirk - you can push elements to the array of any type after tuple has been initially declared.
validRes.push('extra item');
// Enums - specified list of required values (constants)
// =====================================================
// Note: Best to have values formatted as constants.
var ValidResponseEnum;
(function (ValidResponseEnum) {
    ValidResponseEnum[ValidResponseEnum["OK"] = 0] = "OK";
    ValidResponseEnum[ValidResponseEnum["BADREQUEST"] = 1] = "BADREQUEST";
    ValidResponseEnum[ValidResponseEnum["NOTFOUND"] = 2] = "NOTFOUND";
    ValidResponseEnum[ValidResponseEnum["TOOMANYREQUESTS"] = 3] = "TOOMANYREQUESTS";
    ValidResponseEnum[ValidResponseEnum["SERVERERROR"] = 4] = "SERVERERROR";
})(ValidResponseEnum || (ValidResponseEnum = {}));
var enumStatus = ValidResponseEnum.NOTFOUND;
// Enum as parameter.
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var isDelivered = function (status) {
    return status === OrderStatus.DELIVERED;
};
var checkedOrder = isDelivered(OrderStatus.RETURNED); // false
// Assigning values to enums.
var arrowKeys;
(function (arrowKeys) {
    arrowKeys["UP"] = "up";
    arrowKeys["DOWN"] = "down";
    arrowKeys["LEFT"] = "left";
    arrowKeys["RIGHT"] = "right";
})(arrowKeys || (arrowKeys = {}));
var left = arrowKeys.LEFT; // "left"
