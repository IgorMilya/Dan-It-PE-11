//1.
const getP = document.querySelectorAll("p");
getP.forEach(item => item.style.background = "#ff0000");

//2.
const getID = document.querySelector("#optionsList");
console.log(getID);
console.log(getID.parentElement);

if (getID.hasChildNodes()) {
    console.log(getID.childNodes);
}

//3.
const testPar = document.querySelector('#testParagraph');
testPar.innerText = "This is a paragraph";

//4.
const header = document.querySelector('.main-header');
console.log(header.children);

for (let item of header.children) {
    item.classList.add('nav-item');
}

//5.
const remove = document.querySelectorAll('.section-title');
remove.forEach(item => item.classList.remove('section-title'))


//1. Опишіть своїми словами що таке Document Object Model (DOM)
//2. Яка різниця між властивостями HTML-елементів innerHTML та innerText?
//3. Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?

//1. DOM - (document object module) представляющая всё содержимое страницы в
// виде объектов, которые можно изменять.

//2. InnerText - мы меняем и возвращаем какой-то текст в елементе, а innerHTML возвращает и меняет текст включая html теги
// которые являються в елементе

//3. Я считаю что лучший способ это document.querySelector(), так как там мы можем найти елемент по id, teg, class...