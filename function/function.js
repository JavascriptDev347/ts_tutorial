"use strict";
//function declaration
function pow(x, y) {
    return x ** y;
}
//arrow function
const add = (x, y) => {
    return x + y;
};
//void
function log(x) {
    console.log(x);
}
//never function--funksiya shu yerda tugaydi bundan pastiga utmaydi shunaqa xolatlarda ishlatiladi.
function newer(s) {
    throw new Error("Never xatoligi");
}
//signature function
let c;
c = function (a, b) {
    return `a+b = ${a + b}`;
};
function overloadFunc(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `x va y = ${x} ${y}`;
    }
}
console.log(overloadFunc(1, 3));
//# sourceMappingURL=function.js.map