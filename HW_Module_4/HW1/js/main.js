import {Employee} from "./Employee.js";
import {Programmer} from "./Programmer.js";
import {HR} from "./HR.js";

const azmail = new Employee("Azmail", 23, 400);
const ihor = new Programmer("Ihor", 18, 900, ["English", "Germany", "Ukraine"]);
const masha = new HR("Masha", 19, 800, ["English, Polish"], "Mercedes");

console.log(azmail)

ihor.salary = 900;
console.log(ihor)

masha.salary = 800;
masha.age = 19;
console.log(masha)


//1. Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript
//2. Для чого потрібно викликати super() у конструкторі класу-нащадка?

//1. У нас есть объект User с определённами свойствами и мы хотим создать ещё один объект Admin у которого будут повторяться свойства с User
// и какие-то доп свойства для Admin. Чтобы не повторяться и не писать для Admin те свойства что у User, мы можем использовать прототипное
// наследование чтобы мы могли использовать и User свойства для Admin.

//2. Super() унаследует свойства с родителя и передаст ребёнку. Также мы можем потом работать с этими значениями и видоизменять их.
