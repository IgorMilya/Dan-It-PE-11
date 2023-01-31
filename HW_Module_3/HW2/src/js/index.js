let menu = document.querySelector(".nav__menu");
let icon = document.querySelector(".nav__menu-line");
let list = document.querySelector(".nav__list");
let active = document.querySelector(".nav__menu-cross")

const removeToken = () => {
    icon.classList.replace("nav__menu-cross", "nav__menu-line");
    list.classList.remove("opened");
}

menu.addEventListener("click", () => {
    if (icon.className.includes("nav__menu-line")) {
        icon.classList.replace("nav__menu-line", "nav__menu-cross");
        list.classList.add("opened");
    } else {
        removeToken()
    }
})

document.addEventListener("touchstart", e => {
    if (!e.composedPath().includes(list) && !e.composedPath().includes(menu)) {
        removeToken()
    }
})
