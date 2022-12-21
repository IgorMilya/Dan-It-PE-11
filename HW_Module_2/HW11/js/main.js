let password = document.querySelector('.password'),
    password2 = document.querySelector('.password2'),
    icon = document.querySelector('#icon'),
    icon2 = document.querySelector('#icon2'),
    form = document.querySelector('.password-form'),
    p = document.createElement('p'),
    label2 = document.querySelector('.input-wrapper:nth-child(2)');

const openEye = (item, input) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('fa-eye')) {
            item.classList.replace('fa-eye', 'fa-eye-slash')
        } else {
            item.classList.replace('fa-eye-slash', 'fa-eye')
        }
        if (item.className.includes('fa-eye-slash')) {
            input.setAttribute("type", "text");
        } else {
            input.setAttribute("type", "password");
        }
    });
};

openEye(icon, password);
openEye(icon2, password2);

form.addEventListener('submit', (item) => {
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

