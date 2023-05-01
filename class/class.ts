//class
class Person {
    _name: string
    _age: number
    _isMarried: boolean

    constructor(name: string, age: number, isMarried: boolean) {
        this._name = name
        this._age = age
        this._isMarried = isMarried
    }

//    method
    info(): string {
        return `Name is ${this._name}`
    }

//    static - faqatgina classni o'ziga tegishli
    static isFlaying: boolean = false

    static desc(): string {
        return `Bu class Person haqida`
    }

//    getter and setter
    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age
    }

    set age(value: number) {
        if (value >= 18) {
            this._age = value
        } else {
            throw new Error("Xatolik chiqdi")
        }
    }
}

const Person1: Person = new Person("Rustik", 22, false)
// console.log(Person1.info())
// console.log(Person.desc())
// console.log(Person1)
// Person1.age = 10
// console.log(Person1.age)

//birorta obekt classga tegishlimi yoki yo'qligini tekshirish usuli
if ({} instanceof Person) {
    console.log("xa")
} else {
    console.log("NO")
}