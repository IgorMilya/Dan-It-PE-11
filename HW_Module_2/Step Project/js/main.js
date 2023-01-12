let mainListItem = document.querySelectorAll(".main_list_item");
let mainInfo = document.querySelectorAll(".main_info");
let picturesTab = document.querySelectorAll(".main_tab_item");
let picturesItem = document.querySelectorAll(".main_pictures_item");
let sliderItem = document.querySelectorAll(".main_slider_item");
let sliderItems = document.querySelectorAll(".main_slider_item_list_item");

const showInfo = (text, tab) => {
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
    list.forEach((item, index, array) => {
        item.addEventListener("click", () => {
            let active = document.querySelector(searchClass);
            active.classList.remove("active");
            item.classList.add("active");
            let tab = item.getAttribute("data-tab");
            if (array === picturesTab) {
                showImages(text, tab)
            } else {
                showInfo(text, tab)
            }
        })
    });
}

tabAction(mainListItem, mainInfo, ".main_list_item.active");
tabAction(picturesTab, picturesItem, ".main_tab_item.active");
tabAction(sliderItems, sliderItem, ".main_slider_item_list_item.active");


//Slider Block
let buttonBack = document.querySelector(".main_slider_item_list_button_back");
let buttonNext = document.querySelector(".main_slider_item_list_button_next");
let position;

const findPosition = () => {
    sliderItems.forEach((item, index) => {
        if (item.className.includes("active")) {
            position = index;
        }
    })
    sliderItems[position].className = 'main_slider_item_list_item';
}

const nextSlide = () => {
    findPosition();
    position === sliderItems.length - 1 ? position = 0 : position++
    sliderItems[position].classList.add('active');

    let tab = sliderItems[position].getAttribute("data-tab");
    showInfo(sliderItem, tab)
}

const previousSlide = () => {
    findPosition();
    position === 0 ? position = sliderItems.length - 1 : position--
    sliderItems[position].classList.add('active');

    let tab = sliderItems[position].getAttribute("data-tab");
    showInfo(sliderItem, tab)
}


buttonNext.addEventListener("click", nextSlide)
buttonBack.addEventListener("click", previousSlide)
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        nextSlide()
    } else if (e.key === "ArrowLeft") {
        previousSlide()
    }
})


// Add images Our Amazing Work
let buttonFirst = document.querySelector(".first");
let none1 = document.querySelectorAll(".none1");
let none2 = document.querySelectorAll(".none2");
let middle = document.querySelector(".middle");
let counter = 2;

const addPictures = (item, item2, num, btn) => {
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
    setTimeout(addPictures, 3000, none1, none2, counter, buttonFirst)
})


// Add images in Gallery of best images
let secondMiddle = document.querySelector(".second_middle");
let buttonSecond = document.querySelector(".second");
let none3 = document.querySelectorAll(".none3");
let grid = document.querySelector(".main_grid");

buttonSecond.addEventListener("click", () => {
    secondMiddle.classList.remove("hidden");
    buttonSecond.remove();
    setTimeout(() => {
        none3.forEach(item => {
            item.classList.remove("none3");
        })
        grid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
         grid-template-rows: 263px 97px 64px 62px 81px 188px 46px 181px 62px 32px 242px;
        grid-gap: 20px;
        margin-bottom: 52px;
        grid-template-areas:
            "item1 item2 item3"
            "item4 item2 item3"
            "item4 item5 item3"
            "item4 item5 item6"
            "item7 item5 item6"
            "item7 item8 item6"
            "item9 item8 item11"
            "item9 item10 item11"
            "item9 item10 item12"
            "item9 item13 item12"
            "item14 item13 item12"
            "item14 item13 item12";
        `;
        secondMiddle.classList.add("hidden");
    }, 3000,)
})
