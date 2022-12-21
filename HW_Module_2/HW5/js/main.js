const createNewUser = () => {
    let name = prompt("Enter your name");
    let secondName = prompt("Enter your lastName");

    const newUser = {
        firstName: name,
        lastName: secondName,
        getLogin() {
            return (this.firstName[0] + this.lastName).toLowerCase();
        }
    };

    return newUser.getLogin();

}

console.log(createNewUser());




//1. Опишіть своїми словами, що таке метод об'єкту
//2. Який тип даних може мати значення властивості об'єкта?
//3. Об'єкт це посилальний тип даних. Що означає це поняття?

//1. Метод об'єкту это функция которая используеться в объекте и которая использует значения(данный) объекта
//2. Любой тип данных котрому пренадлежит объекту
//3. Это специальный внутрешний тип, который передаёт информацию
