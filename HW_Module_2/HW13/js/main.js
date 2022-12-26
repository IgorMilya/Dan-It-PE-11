let imageToShow = document.querySelectorAll('.image-to-show'),
    btnStop = document.querySelector('.btn__stop'),
    btnContinue = document.querySelector('.btn__continue'),
    div = document.createElement("div"),
    secs = 3,
    item = 0;
document.body.append(div);

const circle = () => {
    imageToShow[item].className = 'image-to-show';
    item === imageToShow.length - 1 ? item = 0 : item++
    imageToShow[item].classList.add('active');
}

const tick = () => {
    div.innerText = `${secs = secs - 0.1}`;
    if (secs < 0) {
        secs = 3;
    }
}

let timer = setInterval(tick, 100);
let slideShow = setInterval(circle, 3000);


btnStop.addEventListener('click', () => {
    clearInterval(slideShow);
    clearInterval(timer);
    btnContinue.disabled = false;
})

btnContinue.addEventListener('click', () => {
    slideShow = setInterval(circle, 3000)
    secs = 3
    timer = setInterval(tick, 100)
    btnContinue.disabled = true;
})

