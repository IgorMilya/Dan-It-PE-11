let name = prompt("Enter your name:");
// Или так
// while (Number(name) === 0 || !isNaN(Number(name))) {
//     name = prompt("Enter your name:");
// }

let age = +prompt("Enter your age:");
// Или так
// while (isNaN(age) || age === 0 || Number.isInteger(age) === false) {
//     age = +prompt("Enter your age:");
// }

while (isNaN(age) || age === 0 || Number.isInteger(age) === false || Number(name) === 0 || !isNaN(Number(name))){
    name = prompt("Enter your name:");
    age = +prompt("Enter your age:");
}

if (age <= 18) {
    alert("You are not allowed to visit this website");
}
if (age >= 18 && age <= 22) {
    if (confirm("Are you sure you want to continue?")) {
        alert("Welcome" + " " + name);
    } else {
        alert("You are not allowed to visit this website");
    }
}
if (age > 22) {
    alert("Welcome" + name);
}

// 1. Які існують типи даних у Javascript?
// 2. У чому різниця між == і ===?
// 3. Що таке оператор?

//1. String, Number, Boolean, null, undefined, BigINT, Objects, Symbol
//2. == это обычное сравнивание значений, а === - строгое сравнивание значений и также типов
//3. Оператор — это специальный символ или выражение для проверки чего-либо и также изменения или сложения величин.