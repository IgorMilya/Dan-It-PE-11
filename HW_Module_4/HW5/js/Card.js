import {request} from "./fetch.js";

export class Card {
    constructor({title, body, id}, {email, username}) {
        this.title = title
        this.body = body
        this.email = email
        this.username = username
        this.postId = id

    }

    showCard(isActive = false) {
        let wrapper = document.querySelector(".wrapper");
        let li = document.createElement("li");
        li.classList.add("wrapper-list")
        li.dataset.id = `${this.postId}`
        li.innerHTML = `
              <div class="wrapper-text">
                  <div>
                    <a class="wrapper-name" href="#">${this.username}</a>
                    <a class="wrapper-email" href="mailto: ${this.email}">${this.email}</a>
                  </div>
                 <button class="delete-btn">delete</button>
              </div>
              <h2>${this.title}</h2>
              <p>${this.body}</p>
           `

        if (isActive === true) {
            wrapper.prepend(li)
        } else {
            wrapper.append(li)
        }

        const deleteButton = li.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => this.deleteCard.bind(this)());
    }

    async deleteCard() {
        let wrapper = document.querySelector(".wrapper");
        const response = await fetch(`https://ajax.test-danit.com/api/json/posts/${this.postId}`, {
            method: "DELETE"
        })
        if (response.status === 200) {
            wrapper.removeChild(
                wrapper.querySelector(`[data-id="${this.postId}"]`)
            );
        }
    }

    async createCard() {
        const isActive = true;
        await request("https://ajax.test-danit.com/api/json/posts", "POST", this)
        this.showCard(isActive);

    }
}
