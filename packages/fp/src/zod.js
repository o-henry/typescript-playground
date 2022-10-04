"use strict";
exports.__esModule = true;
var zod_1 = require("zod");
var CalculateRiskProfile = function (age) { return (age < 60 ? Risk.Low : Risk.Medium); };
var _Age = zod_1.z.number().refine(function (v) { return 0 <= v && v < 120; }, { message: "Age can't be more than 120." });
var __Age = zod_1.z.number().refine(function (age) { return 0 <= age && age < 120; });
var Risk;
(function (Risk) {
    Risk[Risk["Low"] = 0] = "Low";
    Risk[Risk["Medium"] = 1] = "Medium";
    Risk[Risk["High"] = 2] = "High";
})(Risk || (Risk = {}));
var _CalculateRiskProfile = function (age) { return (__Age.parse(age) < 60 ? Risk.Low : Risk.Medium); };
// console.log(_Age.safeParse(9999))
// console.log(_Age.parse(90))
console.log(_CalculateRiskProfile(10)); // 0
console.log(_CalculateRiskProfile(70)); // 1
console.log(_CalculateRiskProfile(9999)); // Error
