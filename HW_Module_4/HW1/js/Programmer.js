import {Employee} from "./Employee.js";

export class Programmer extends Employee {
    constructor(name, age, salary, lang = []) {
        super(name, age, salary);
        this.lang = lang
    }

    set salary(value) {
        this._salary = value * 3;
    }

}