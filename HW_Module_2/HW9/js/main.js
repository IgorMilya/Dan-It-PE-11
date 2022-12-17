let ul = document.createElement('ul');
document.body.prepend(ul);
ul.style.listStyle = 'none';

const insert = (array, parent) => {
    array.forEach(item => {
        if (Array.isArray(item)) {
            insert(item, ul);
        } else {
            let li = document.createElement('li');
            li.innerText = `${item}`;
            parent.append(li);
        }
    })
}

insert(["Kharkiv", "Kyiv", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"], ul);

setInterval(() => ul.remove(), 3000);


//1. Опишіть, як можна створити новий HTML тег на сторінці.
//2. Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра.
//3. Як можна видалити елемент зі сторінки?

// 1. Потрібно написати: document.createElement(' "some tag" ');

// 2. Перший параметр це позиція відносто елемента. Можливо такі варіанти: "beforebegin", "afterbegin", "beforeend",
//    "afterend". Beforebegin - перед елементом, afterbegin - перед першим дочірним елементом, beforeend - після
//     останнього дочірнього елемента, beforeend - після елемента, але він дійсний якщо елемент має батьківський елемент.

// 3. Потрібно написати: element.remove()


















