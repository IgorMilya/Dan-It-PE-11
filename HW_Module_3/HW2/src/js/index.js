let menu = document.querySelector(".nav__menu");
let icon = document.querySelector(".nav__menu-line");
let list = document.querySelector(".nav__list");

menu.addEventListener("click", () => {
    if (icon.className.includes("nav__menu-line")) {
        icon.classList.replace("nav__menu-line", "nav__menu-cross");
        // list.style.display = "block";
        list.classList.add("opened");
    } else {
        icon.classList.replace("nav__menu-cross", "nav__menu-line")
        // list.style.display = "none";
        list.classList.remove("opened");
    }

})