let imageToShow = document.querySelectorAll('.image-to-show');
let btnStop = document.querySelector('.btn__stop');
let btnContinue = document.querySelector('.btn__continue');
let div = document.createElement("div");
let secs = 3;
let item = 0;
document.body.append(div);

const circle = () => {
    imageToShow[item].className = 'image-to-show';
    item === imageToShow.length - 1 ? item = 0 : item++
    imageToShow[item].classList.add('active');
}


const tick = () => {
    let currentTime = (secs = secs - 0.01).toFixed(3);
    div.innerText = `${currentTime}`;
    if (secs < 0) {
        secs = 3;
    }
}

let timer = setInterval(tick, 10);

let slideShow = setInterval(circle, 3000);


btnStop.addEventListener('click', () => {
    clearInterval(slideShow);
    clearInterval(timer);
    btnContinue.disabled = false;
})

btnContinue.addEventListener('click', () => {
    slideShow = setInterval(circle, 3000)
    timer = setInterval(tick, 10)
    secs = 3;
    btnContinue.disabled = true;
})

