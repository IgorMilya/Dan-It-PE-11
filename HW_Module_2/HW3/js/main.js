let number = +prompt("Enter the number:");

while(isNaN(number) || Number.isInteger(number) === false || !!number === false){
     number = +prompt("Enter the number:");
}

// if (number % 5 === 0){
//     for (let i = 0; i <= number; i+=5){
//         console.log(i)
//     }
// }else {
//     alert("Sorry, no numbers");
// }

if (number >= 5){
    for (let i = 0; i <= number; i+=5){
        console.log(i)
    }
}else {
    alert("Sorry, no numbers");
}
