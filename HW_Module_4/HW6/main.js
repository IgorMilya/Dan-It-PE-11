import {request} from "./fetch.js";

const ipButton = document.querySelector(".ip-btn");
const ipWrapper = document.querySelector("#ip");

ipButton.addEventListener("click", async () => {
    const ipData = await request("https://api.ipify.org/?format=json", "GET")
    const {ip} = ipData;
    const physicalAddress = await request(`http://ip-api.com/json/${ip}`, "GET")

    console.log(physicalAddress)
    const {regionName, country, city, region, countryCode} = physicalAddress;

    ipWrapper.innerHTML = `
    <ul>
    <li>${countryCode}</li>
    <li>${country}</li>
    <li>${city}</li>
    <li>${regionName}</li>
    <li>${region}</li>
    </ul>
    `
})

//Поясніть своїми словами, як ви розумієте поняття асинхронності у Javascript

//Асинхронность - это когда мы ждём пока что-то выполниться и после этого можем идти дальше и выполнят следуйщий код.