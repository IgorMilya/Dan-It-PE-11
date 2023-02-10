class Employee {
    constructor(name, age, salary) {
        this._name = name
        this._age = age
        this._salary = salary
    };

    set name(value) {
        this._name = value;
    }

    set age(value) {
        this._age = value;
    }

    set salary(value) {
        this._salary = value;
    }

    get name() {
        return this._name
    }

    get age() {
        return this._age
    }

    get salary() {
        return this._salary
    }

}

class Programmer extends Employee {
    constructor(name, age, salary, lang = []) {
        super(name, age, salary);
        this.lang = lang
    }

    set salary(value) {
        this._salary = value * 3;
    }

}

class HR extends Programmer {
    constructor(name, age, salary, lang = [], car) {
        super(name, age, salary, lang);
        this.car = car
    }

    set age(value) {
        this._age = value + 3;
    }

}

const azmail = new Employee("Azmail", 23, 400);
const ihor = new Programmer("Ihor", 18, 900, ["English", "Germany", "Ukraine"]);
const masha = new HR("Masha", 19, 800, ["English, Polish"], "Mercedes");


console.log(azmail)


ihor.salary = 900;
console.log(ihor)


masha.salary = 800;
masha.age = 19;
console.log(masha)

