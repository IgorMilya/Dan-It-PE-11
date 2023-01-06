let mainListItem = document.querySelectorAll(".main_list_item");
let mainInfo = document.querySelectorAll(".main_info");
let buttonFirst = document.querySelector(".first");
let buttonSecond = document.querySelector(".second");
let none1 = document.querySelectorAll(".none1");
let none2 = document.querySelectorAll(".none2");
let mainTabItem = document.querySelectorAll(".main_tab_item");
let picturesItem = document.querySelectorAll(".main_pictures_item");
let counter = 2;
const tabAction = (list, text) => {
    list.forEach(item => {
        item.addEventListener("click", () => {
            let active = document.querySelector(".active");
            active.classList.remove("active");
            item.classList.add("active");
            let tab = item.getAttribute("data-tab");
            text.forEach(value => {
                value.className.includes(tab) ? value.classList.add("active") : value.classList.remove("active");
            })
        })
    });
}
tabAction(mainListItem, mainInfo);

const tabAction2 = (list, info) => {
    list.forEach(item => {
        item.addEventListener("click", () => {
            let isActive = document.querySelector(".is-active");
            isActive.classList.remove("is-active");
            item.classList.add("is-active");
            let tab = item.getAttribute("data-tab");
            console.log(tab)
            info.forEach(value => {
                value.className.includes(tab) ? value.style.display = "block" : value.style.display = "none"
            })
        })
    });
}
tabAction2(mainTabItem, picturesItem);
const deleteButton = (item, item2, num, btn) => {
    btn.addEventListener("click", () => {
            if (num === 1) {
                none2.forEach(element => {
                    element.classList.remove("none2");
                })
                btn.remove();
            } else {
                none1.forEach(element => {
                    element.classList.remove("none1");
                });
                num--;
            }
        })
    }

deleteButton(none1, none2, counter, buttonFirst);
// deleteButton(none1, none2, counter, buttonSecond);


