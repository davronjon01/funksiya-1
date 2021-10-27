"use strick";

let number = 5;
//tashqi o'zgaruvchi
function getText() {
    console.log("Hello world");
    number = 10;
// ichki o'zgaruvchi 
}

getText();
console.log(number);

function calc(x, y) {
    return x + y;
}
console.log(calc(5, 56));
console.log(calc(22, 56));
console.log(calc(33, 56));
console.log(calc(12, 56));
console.log(calc(34, 56));

// function declaration

function returnNumber() {
    let number = 8;
    return number;
}
const num = returnNumber();
console.log(num);

// function expression
const funcExp = function() {
    console.log(10);
}
funcExp();


// array function

const arrayFunction = (c, d) => {
    return c + d;
}

const plus = arrayFunction(19, 21);
console.log(plus);



