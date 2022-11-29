const createNewUser = () => {
    return {
        firstName: prompt("Enter your name"),
        lastName: prompt("Enter your lastName"),
        birthday: prompt("Enter your birthday in this format 'dd.mm.yyyy':"),
        getLogin() {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        getAge() {
            return new Date().getFullYear() - this.birthday.slice(6);
        },
        getPassword() {
            return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.slice(6);
        }
    }
}

let newUser = createNewUser();
console.log(newUser, newUser.getLogin(), newUser.getAge(), newUser.getPassword());

//1. Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування
//2. Які засоби оголошення функцій ви знаєте?
//3. Що таке hoisting, як він працює для змінних та функцій?

//1. Это процесс когда мы избегаем специальные символы, когда не хотим, чтобы они имели свое особое значение. Замена в
// тексте на нужный нам текстовые подстановки.

//2. У нас есть function declaration, function expression and arrow function.

//3. hoisting — это когда переменные и объявления функций, передвигаются вверх
// своей области видимости перед тем, как код будет выполнен. Неважно где будет объявленная функция или переменная,
// глобально или локально, они будет передвигатся вверх.

