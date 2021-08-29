"use strict";
// enum
// numeric enums
// enum Day {
//   Mon = 1,
//   Tue,
//   Wed,
//   Thu,
//   Fri,
//   Sat,
//   Sun,
// }
// console.log(Day.Wed)
// string enums
var Day;
(function (Day) {
    Day["Mon"] = "Monday";
    // Nilai selanjutnya harus diisi
    Day["Tue"] = "Tuesday";
    Day["Wed"] = "Wednesday";
    Day["Thu"] = "Thursday";
    Day["Fri"] = "Friday";
    Day["Sat"] = "Saturday";
    Day["Sun"] = "Sunday";
})(Day || (Day = {}));
console.log(Day.Fri);
