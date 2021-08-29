"use strict";
// array
var arr = [1, 2, 3]; /* === let arr: number[] */
// arr tidak bisa diisi tipe data lain
// arr = ['a', 'b', 'c'] => error
var arr2;
arr2 = ["a", "b", "c"];
var arr3;
arr3 = ["a", 2, {}, false];
// tuples
var biodata;
biodata = ["Surabaya", 123];
// biodata = ["Surabaya", true] ==> error
// biodata = [123, "Surabaya"] ==> error
// biodata = ["Surabaya", 123, false] ==> error
