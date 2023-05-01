//function declaration
function pow(x: number, y: number): number {
    return x ** y
}

//arrow function
const add = (x: number, y: number): number => {
    return x + y;
}

//void
function log(x: number): void {
    console.log(x)
}

//never function--funksiya shu yerda tugaydi bundan pastiga utmaydi shunaqa xolatlarda ishlatiladi.

function newer(s: string): never {
    throw new Error("Never xatoligi")
}

//signature function
let c: (x: number, y: string) => string;
c = function (a: number, b: string): string {
    return `a+b = ${a + b}`
}


// function overloads
function overloadFunc(x: string, y: string): string
function overloadFunc(x: number, y: number): number;
function overloadFunc(x: any, y: any): any {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else {
        return `x va y = ${x} ${y}`
    }
}

console.log(overloadFunc(1, 3))
