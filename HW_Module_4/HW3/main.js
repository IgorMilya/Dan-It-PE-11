//1
const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

const allClients = [...clients1, ...clients2].reduce((prev, next) => {
    if (!prev.includes(next)) {
        prev.push(next)
    }
    return prev

}, []);

// or this one
// const allClients = [...new Set([...clients1, ...clients2])]

console.log(allClients);

//2
const characters = [
    {
        name: "Елена",
        lastName: "Гилберт",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Кэролайн",
        lastName: "Форбс",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Аларик",
        lastName: "Зальцман",
        age: 31,
        gender: "man",
        status: "human"
    },
    {
        name: "Дэймон",
        lastName: "Сальваторе",
        age: 156,
        gender: "man",
        status: "vampire"
    },
    {
        name: "Ребекка",
        lastName: "Майклсон",
        age: 1089,
        gender: "woman",
        status: "vempire"
    },
    {
        name: "Клаус",
        lastName: "Майклсон",
        age: 1093,
        gender: "man",
        status: "vampire"
    }
];

const newCharacters = characters.map(({gender, status, ...other}) => other);
console.log(newCharacters);

//3
const user1 = {
    name: "John",
    years: 30,
};

const {name: firstName, years: age, isAdmin = false} = user1;

console.log(firstName)
console.log(age)
console.log(isAdmin)

//4
const satoshi2020 = {
    name: 'Nick',
    surname: 'Sabo',
    age: 51,
    country: 'Japan',
    birth: '1979-08-21',
    location: {
        lat: 38.869422,
        lng: 139.876632
    }
}

const satoshi2019 = {
    name: 'Dorian',
    surname: 'Nakamoto',
    age: 44,
    hidden: true,
    country: 'USA',
    wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    browser: 'Chrome'
}

const satoshi2018 = {
    name: 'Satoshi',
    surname: 'Nakamoto',
    technology: 'Bitcoin',
    country: 'Japan',
    browser: 'Tor',
    birth: '1975-04-05'
}
const fullProfile = {
    ...satoshi2018,
    ...satoshi2019,
    ...satoshi2020
}
console.log(fullProfile)

//5
const books = [{
    name: 'Harry Potter',
    author: 'J.K. Rowling'
}, {
    name: 'Lord of the rings',
    author: 'J.R.R. Tolkien'
}, {
    name: 'The witcher',
    author: 'Andrzej Sapkowski'
}];

const bookToAdd = {
    name: 'Game of thrones',
    author: 'George R. R. Martin'
}

const newBooks = [...books, bookToAdd];
console.log(newBooks)

//6
const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
}

const newEmployee = {
    ...employee,
    age: 18,
    salary: 1000
}
console.log(newEmployee)

//7
const array = ['value', () => 'showValue'];
const [value, showValue] = array;

alert(value);
alert(showValue());

// Поясніть своїми словами, як ви розумієте, що таке деструктуризація і навіщо вона потрібна?

// Это синтансический сахар который упрощает работу с массивами и обьектами в целом. Ты можешь разбить массив или обьект на
// несколько частей чтобы код был более лаконичным и не повторялась переменная обьекта или массива при вызове ключа обьекта.
