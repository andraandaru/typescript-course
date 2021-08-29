"use strict";
// tipe data pada return function
var getName = function () {
    return "Hello, my name is Andra";
    // return 123 => error
};
console.log(getName());
var getAgg = function () {
    return 123;
};
var printName = function () {
    console.log("Print Name");
    // return "ASD" => Error
};
// printName()
// argument types
var multiply = function (num1, num2) {
    return num1 * num2;
};
var result = multiply(2, 5);
console.log(result);
var Add = function (num1, num2) {
    return num1 + num2;
};
// default param
var fullName = function (first, last) {
    if (last === void 0) { last = "Andaru"; }
    return first + " " + last;
};
console.log(fullName("Andra"));
// optional parameter
var getUmur = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getUmur("A"));
