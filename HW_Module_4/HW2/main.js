const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",

    }
];

let root = document.querySelector("#root");
let ul = document.createElement("ul");
root.append(ul);


books.map(item => {

    const {author, name, price} = item;

    if (!!author && !!name && !!price) {
        let ul = document.createElement("ul");
        ul.innerHTML = `
       <li>${author}</li>
       <li>${name}</li>
       <li>${price}</li>
       `
        root.append(ul);
    }
})


books.forEach((item, index) => {
    ['name', 'author', 'price'].forEach(prop => {
        try {
            if (!item.hasOwnProperty(prop)) {
                throw new Error(`В обьекте номер ${index + 1} нет ${prop}`)
            }
        } catch (e) {
            console.error(e.message)
        }

    })

})





