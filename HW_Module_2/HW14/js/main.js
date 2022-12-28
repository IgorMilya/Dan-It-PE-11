let button = document.querySelector('.button');

button.addEventListener('click', () => {
    if (document.body.className.includes("none")) {
        document.body.classList.replace("none", "blue")
    } else {
        document.body.classList.replace("blue", "none")
    }
    localStorage.color = document.body.className || "none";
});

if (!localStorage.color) {
    localStorage.color = "none"
}
document.body.className = localStorage.color;


