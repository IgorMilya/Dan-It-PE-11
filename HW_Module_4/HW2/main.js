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


    try {
        if (!author ) {
            throw new Error("The property of author is not in obj")
        }
        if (!name ) {
            throw new Error("The property of name is not in obj")
        }
        if (!price) {
            throw new Error("The property of price is not in obj")
        }

    } catch (e) {
        console.error(e.message)
    }

})












