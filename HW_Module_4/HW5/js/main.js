import {request} from "./fetch.js";
import {Card} from "./Card.js";

const loader = document.querySelector(".lds-ellipsis");
const scrim = document.querySelector(".scrim")
const form = document.querySelector(".main_data");
const bntPost = document.querySelector(".bnt-post");


const [users, posts] = await Promise.all([
    request("https://ajax.test-danit.com/api/json/users", "GET"),
    request("https://ajax.test-danit.com/api/json/posts", "GET")
]);


users.forEach(actor => {
    const actorPosts = posts.filter(({userId}) => actor.id === userId);
    actorPosts.forEach(element => {
        const twitterCard = new Card(element, actor);
        loader.style.display = "none";
        twitterCard.showCard()
    })
});

bntPost.addEventListener("click", () => scrim.style.display = "flex")

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputTitle = document.querySelector("#title")
    const inputBody = document.querySelector("#body")
    const twitterCard = new Card({title: inputTitle.value, body: inputBody.value, id: 1}, {
        email: "Sincere@april.biz",
        username: "Bret"
    });

    await twitterCard.createCard()
    inputTitle.value = ""
    inputBody.value = ""
    scrim.style.display = "none"
})


