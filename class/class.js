"use strict";
//class
class Person {
    constructor(name, age, isMarried) {
        this._name = name;
        this._age = age;
        this._isMarried = isMarried;
    }
    //    method
    info() {
        return `Name is ${this._name}`;
    }
    static desc() {
        return `Bu class Person haqida`;
    }
    //    getter and setter
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 18) {
            this._age = value;
        }
        else {
            throw new Error("Xatolik chiqdi");
        }
    }
}
//    static - faqatgina classni o'ziga tegishli
Person.isFlaying = false;
const Person1 = new Person("Rustik", 22, false);
// console.log(Person1.info())
// console.log(Person.desc())
// console.log(Person1)
// Person1.age = 10
// console.log(Person1.age)
//birorta obekt classga tegishlimi yoki yo'qligini tekshirish usuli
if ({} instanceof Person) {
    console.log("xa");
}
else {
    console.log("NO");
}
//# sourceMappingURL=class.js.map