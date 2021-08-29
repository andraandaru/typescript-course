// array
let arr = [1, 2, 3] /* === let arr: number[] */
// arr tidak bisa diisi tipe data lain
// arr = ['a', 'b', 'c'] => error

let arr2: string[]
arr2 = ["a", "b", "c"]

let arr3: any[]
arr3 = ["a", 2, {}, false]

// tuples
let biodata: [string, number];
biodata = ["Surabaya", 123];
// biodata = ["Surabaya", true] ==> error
// biodata = [123, "Surabaya"] ==> error
// biodata = ["Surabaya", 123, false] ==> error