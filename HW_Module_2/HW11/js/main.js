let password = document.querySelector('.password'),
    password2 = document.querySelector('.password2'),
    icon = document.querySelector('#icon'),
    icon2 = document.querySelector('#icon2'),
    button = document.querySelector('.btn'),
    p = document.createElement('p'),
    label2 = document.querySelector('.input-wrapper:nth-child(2)');

const openEye = (item, input) => {
    item.addEventListener('click', () => {
        item.classList.toggle('fa-eye-slash');
        if (item.className.includes('fa-eye-slash')) {
            input.setAttribute("type", "text");
        } else {
            input.setAttribute("type", "password");
        }
    });
};
openEye(icon, password);
openEye(icon2, password2);

button.addEventListener('click', (item) => {
    item.preventDefault();
    if (password.value === password2.value) {
        alert('Welcome');
        p.remove()
    } else {
        p.style.color = "red";
        p.innerText = `Потрібно ввести однакові значення`;
        label2.append(p);
    }
});

