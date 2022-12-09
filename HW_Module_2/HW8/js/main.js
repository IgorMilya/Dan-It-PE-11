//1.
const getP = document.querySelectorAll("p");
getP.forEach(item => item.style.background = "#ff0000");

//2. question
const getID = document.querySelector("#optionsList");
console.log(getID);
console.log(getID.parentElement);

if (getID.hasChildNodes()) {
    console.log(getID.childNodes);
}

//3. question
const testPar = document.querySelector('#testParagraph');
testPar.innerText = "This is a paragraph";

//4. question
const header = document.querySelector('.main-header');
console.log(header.children);

for (let item of header.children) {
    item.classList.add('nav-item');
}

//5.
const remove = document.querySelectorAll('.section-title');
remove.forEach(item => item.classList.remove('section-title'))

