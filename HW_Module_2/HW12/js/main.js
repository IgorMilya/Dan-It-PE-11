let bnt = document.querySelectorAll('.btn');

window.addEventListener('keydown', e => {
    bnt.forEach(item => {
        if (e.key.toLowerCase() === item.dataset.keypress.toLowerCase()){
            item.style.background = "blue";
        }else {
            item.removeAttribute('style');
        }
    });
});

// 1.Чому для роботи з input не рекомендується використовувати клавіатуру?

// ми не використовуємо в інпутах клаву так як цей метод відловлює кожну літеру в цьому інпуті, якщо ми хочемо дізнатися,
// що ввів користувач або обмежити його, просто треба в input.value щось задати або просто викликати, або використати
// onchange