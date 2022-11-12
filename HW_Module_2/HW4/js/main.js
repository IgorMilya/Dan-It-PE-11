let number1 = +prompt(`Enter your number1 `);
let number2 = +prompt(`Enter your number2 `);

while (isNaN(number1) || Boolean(number1) === false || isNaN(number2) || Boolean(number2) === false) {
    number1 = +prompt(`Enter your number1 `);
    number2 = +prompt(`Enter your number2 `);
}

let symbol = prompt(`Enter + or - or / or * `);

let count = (num1, num2, item) => {
    switch (item) {
        case `+` :
            //как лучше
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
            console.log("Sorry, the symbol is not correct")
    }
}
count(number1, number2, symbol);