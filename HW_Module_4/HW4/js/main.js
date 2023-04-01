import {request} from "./fetch.js";

request("https://ajax.test-danit.com/api/swapi/films", 'GET')
    .then(data => data.forEach(item => {
        const mainDiv = document.createElement("div");
        const div = document.createElement("div");
        const {characters, episodeId, name, openingCrawl} = item;

        div.innerHTML = `
    <span>${episodeId}</span>
    <h1>${name}</h1>
    <p>${openingCrawl}</p>
    `;

        document.body.append(mainDiv);
        mainDiv.append(div);

        const listOfName = characters.map(item => {
            return request(item, 'GET')
                .then(({name}) => name)
        })

        Promise.all(listOfName)
            .then(dataset => {
                const ol = document.createElement("ol")
                return dataset.map(element => {
                    const li = document.createElement("li")
                    li.textContent = `${element}`;
                    ol.append(li)
                })
            }).then(res => console.log(res))


    }))


// async await method

// const data = await request("https://ajax.test-danit.com/api/swapi/films", 'GET');
// data.forEach(async (item) => {
//     let mainDiv = document.createElement("div");
//     let div = document.createElement("div");
//     const {characters, episodeId, name, openingCrawl} = item;
//
//     div.innerHTML = `
//     <span>${episodeId}</span>
//     <h1>${name}</h1>
//     <p>${openingCrawl}</p>
//     `;
//     document.body.append(mainDiv);
//     mainDiv.append(div);
//
//
//     const listOfName = characters.map(async (item) => {
//         const info = await request(`${item}`, 'GET')
//         const {name} = info;
//         return name
//     })
//     const dataset = await Promise.all(listOfName);
//     let ol = document.createElement("ol")
//     dataset.forEach(element => {
//         let li = document.createElement("li")
//         li.textContent = `${element}`;
//         ol.append(li)
//     })
//     mainDiv.append(ol)
// })


// Поясніть своїми словами, що таке AJAX і чим він корисний при розробці Javascript

// AJAX - помогает использовать функции(технологии) на стороне клиента(сервера) с которыми мы можем
// создавать асинхронные приложения. Мы может отправлять запросы и принимать информацию
// без вмешательств в глобальный код, если так можно выразиться.




