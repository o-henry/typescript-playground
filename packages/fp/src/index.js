"use strict";
exports.__esModule = true;
var CalculateRiskProfile = function (age) { return (age._value < 60 ? Risk.Low : Risk.Medium); };
var Risk;
(function (Risk) {
    Risk[Risk["Low"] = 0] = "Low";
    Risk[Risk["Medium"] = 1] = "Medium";
    Risk[Risk["High"] = 2] = "High";
})(Risk || (Risk = {}));
var Age = /** @class */ (function () {
    function Age(value) {
        this.value = value;
        this.value = value;
    }
    Object.defineProperty(Age.prototype, "_value", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Age.prototype.Age = function (value) {
        if (!Age.IsValid(value))
            throw new Error("".concat(value, " is not a valid age."));
        this.value = value;
    };
    Age.IsValid = function (age) { return 0 <= age && age < 120; };
    return Age;
}());
console.log(CalculateRiskProfile(new Age(49)));
console.log(CalculateRiskProfile(new Age(-69)));
console.log(CalculateRiskProfile(new Age(9229)));
