//bunaqa qilish maslahat berilmaydi
let a: any = 10;
let b: number = a;

//unkown type
// let c: unknown = 123;
// let i: number = <number>c;
// let f: number = c as number;


//union type
let h: number | string = 12;
h = "Start";

//literal type
let s: 'sm' | 'md|' | 'lg';
s = 'sm'

// type alias
type Sizes = "SM" | "MD" | "LG";
let s2: Sizes = "MD"

type OBJ = { name: string, isMarried: boolean };
let obj: OBJ;
obj = {name: "Rustambek", isMarried: false}