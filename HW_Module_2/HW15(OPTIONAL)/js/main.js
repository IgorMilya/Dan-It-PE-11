let number = +prompt("Enter the number:");
while (isNaN(number) || Boolean(number) === false || Number.isInteger(number) === false) {
    number = +prompt("Enter the number:");
}

let factorial = 1;
const countOfFactorial = (n) => {
    if (n === 0) {
        console.log(factorial)
    } else {
        factorial *= n;
        countOfFactorial(n - 1);
    }
}
countOfFactorial(number);
