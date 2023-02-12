import {Programmer} from "./Programmer.js";

export class HR extends Programmer {
    constructor(name, age, salary, lang = [], car) {
        super(name, age, salary, lang);
        this.car = car
    }

    set age(value) {
        this._age = value + 3;
    }

}