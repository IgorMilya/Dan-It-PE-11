let button = document.querySelector('.button');
document.body.className = localStorage.color;

if (!localStorage.color){
    localStorage.setItem("color", "none");
}

button.addEventListener('click', () => {
    if (document.body.className.includes("none")) {
        document.body.classList.replace("none", "blue")
    } else {
        document.body.classList.replace("blue", "none")
    }
    localStorage.color = document.body.className;
});