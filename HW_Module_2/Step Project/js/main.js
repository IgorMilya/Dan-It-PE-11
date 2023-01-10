let mainListItem = document.querySelectorAll(".main_list_item");
let mainInfo = document.querySelectorAll(".main_info");
let buttonFirst = document.querySelector(".first");
let none1 = document.querySelectorAll(".none1");
let none2 = document.querySelectorAll(".none2");
let buttonSecond = document.querySelector(".second");
let none3 = document.querySelectorAll(".none3");
let none4 = document.querySelectorAll(".none4");
let mainTabItem = document.querySelectorAll(".main_tab_item");
let picturesItem = document.querySelectorAll(".main_pictures_item");
let sliderItem = document.querySelectorAll(".main_slider_item");
let sliderItems = document.querySelectorAll(".main_slider_item_list_item");
let buttonBack = document.querySelector(".main_slider_item_list_button_back");
let buttonNext = document.querySelector(".main_slider_item_list_button_next");
let middle = document.querySelector(".middle");
let counter = 2;

const showInfo = (text, tab ) => {
    text.forEach(value => {
        value.classList.toggle("active", value.className.includes(tab))
    })
}

const showImages = (text, tab) => {
    text.forEach(value => {
        console.log(value)
        value.className.includes(tab) ? value.style.display = "block" : value.style.display = "none"
    })
}

const tabAction = (list, text, searchClass) => {
    list.forEach((item, index , array) => {
        item.addEventListener("click", () => {
            let active = document.querySelector(searchClass);
            active.classList.remove("active");
            item.classList.add("active");
            let tab = item.getAttribute("data-tab");
            if (array === mainTabItem){
                showImages(text, tab)
            }else {
                showInfo(text, tab)
            }
        })
    });
}

tabAction(mainListItem, mainInfo, ".main_list_item.active" );
tabAction(sliderItems, sliderItem, ".main_slider_item_list_item.active" );
tabAction(mainTabItem, picturesItem, ".main_tab_item.active");

const slider = (back, next, tabs, text) => {
    let position;

    next.addEventListener("click", () => {
        tabs.forEach((item, index) => {
            if (item.className.includes("active")) {
                position = index;
            }
        })
        tabs[position].className = 'main_slider_item_list_item';
        position === tabs.length - 1 ? position = 0 : position++
        tabs[position].classList.add('active');

        let tab = tabs[position].getAttribute("data-tab");
        showInfo(text, tab)
    })

    back.addEventListener("click", () => {
        tabs.forEach((item, index) => {
            if (item.className.includes("active")) {
                position = index;
            }
        })
        tabs[position].className = 'main_slider_item_list_item';
        position === 0 ? position = tabs.length - 1 : position--
        tabs[position].classList.add('active');

        let tab = tabs[position].getAttribute("data-tab");
        showInfo(text, tab)
    })

}

slider(buttonBack, buttonNext, sliderItems, sliderItem);




const deleteButton = (item, item2, num, btn) => {
    if (num <= 1) {
        item2.forEach(element => {
            element.classList.remove("none2");
        })
        middle.classList.add("hidden");
        btn.remove();
    } else {
        item.forEach(element => {
            element.classList.remove("none1");
        });
        middle.classList.add("hidden");
        num--;
    }
    counter = num;
}

buttonFirst.addEventListener("click", () => {
    middle.classList.remove("hidden");
    setTimeout(deleteButton, 3000, none1, none2, counter, buttonFirst)
})


