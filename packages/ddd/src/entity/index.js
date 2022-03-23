"use strict";
exports.__esModule = true;
exports.Person = exports._Person = void 0;
/**
 * @desc 엔터티는 다른 인스턴스를 구분하기 위해 명시적인 식별 필드(ID) 가 필요하다.
 */
var _Person = /** @class */ (function () {
    function _Person(name) {
        this.name = name;
    }
    _Person.prototype.get = function () {
        console.log("Person name is ".concat(this.name));
    };
    return _Person;
}());
exports._Person = _Person;
// 다른 사람이 같은 이름을 갖는 경우
var Bob = new _Person('Bob');
var BobB = new _Person('Bob');
Bob.get();
BobB.get();
// 이를 구분하기 위해서 id 필드를 추가한다.
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.get = function () {
        console.log("Person name is ".concat(this.name, " and id is ").concat(this.id));
    };
    return Person;
}());
exports.Person = Person;
var Tom = new Person('abcd', 'Tom');
var TomB = new Person('efgc', 'Tom');
Tom.get();
TomB.get();
