let number1 = +prompt(`Enter your number1 `);
let number2 = +prompt(`Enter your number2 `);

while (isNaN(number1) || Boolean(number1) === false || isNaN(number2) || Boolean(number2) === false) {
    number1 = +prompt(`Enter your number1 `);
    number2 = +prompt(`Enter your number2 `);
}

let symbol = prompt(`Enter + or - or / or * `);

const count = (num1, num2, item) => {
    switch (item) {
        case `+` :
            // как лучше
            // так
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
            //или так
            // console.log(num1 + "+" + num2 + "=" + Number(num1+num2))
            break;
        case `-` :
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
            break;
        case `/` :
            console.log(`${num1} / ${num2} = ${num1 / num2}`)
            break;
        case `*` :
            console.log(`${num1} * ${num2} = ${num1 * num2}`)
            break;
        default:
            console.log(`Sorry, the symbol is not correct`)
    }
}
count(number1, number2, symbol);

// 1. Описати своїми словами навіщо потрібні функції у програмуванні.
// 2. Описати своїми словами, навіщо у функцію передавати аргумент.
// 3. Що таке оператор return та як він працює всередині функції?

// 1. Чтобы мы могли вызвать одну и туже функцию(действие) столько, сколько мы захотим
// 2. Чтобы наша функция была оптимальной и принимать любые числа, значения, аргументы кототрые будут использоваться в функции.
//    Чтобы не переписывать заново всю функцию под определённые числа, мы пишем аргументы и в конце передаём,
//    то что мы хотим передать.
// 3. Return - возвращает нам то значение или результат функции который мы укажем.