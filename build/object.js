"use strict";
// Object
var user = {
    name: "Andra",
    age: 21,
};
// object menjadi immutable
user = {
    // alamat: "Bandung" => Error
    name: "Bandung",
    age: 22,
};
