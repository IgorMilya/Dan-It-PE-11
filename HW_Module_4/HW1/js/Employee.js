export class Employee {
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