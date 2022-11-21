const createNewUser = () => {
    return {
        firstName: prompt("Enter your name"),
        lastName: prompt("Enter your lastName"),
        getLogin() {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
    };
}

const newUser = createNewUser();
console.log(newUser)
console.log(newUser.getLogin());


//1. Опишіть своїми словами, що таке метод об'єкту
//2. Який тип даних може мати значення властивості об'єкта?
//3. Об'єкт це посилальний тип даних. Що означає це поняття?

//1. Метод об'єкту это функция которая используеться в объекте и которая использует значения(данный) объекта
//2. Любой тип данных котрому пренадлежит объекту
//3. Это специальный внутрешний тип, который передаёт информацию
