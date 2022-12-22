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

//