let ul = document.createElement('ul');
document.body.prepend(ul);
ul.style.listStyle = 'none';

const insert = (array, parent) => {
    array.forEach(item => {
        if (Array.isArray(item)) {
            insert(item, ul);
        } else {
            let li = document.createElement('li');
            li.innerText = `${item}`;
            parent.append(li);
        }
    })
}

// const demolish = () => {
//     let body = document.querySelector("body");
//     body.style.display = "none";
// }

insert(["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"], ul);

setInterval(()=> ul.remove(), 3000);

// setInterval(demolish,3000);