let tabsTitle = document.querySelectorAll('.tabs-title');
let tabsText = document.querySelectorAll('.tabs-text');

const toggle = (title, text) => {
    title.forEach(item => {
        item.addEventListener('click', () => {
            // setTabTitle
            let active = document.querySelector('.active');
            active.classList.remove('active');
            item.classList.add('active');
            // setTabText
            let tabName = item.getAttribute('data-tab');
            text.forEach(value => {
                value.classList.contains(tabName) ? value.classList.add('active') : value.classList.remove('active');
            });
        });
    });
};

toggle(tabsTitle,tabsText);
