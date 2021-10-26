"use strick";

let number = 8;
// global o'zgaruvchi 

function getText(text) {
    console.log(text);
    let number = 10;
    console.log(number);
    // ichki o'zgaruvchi
}

getText("Hello world");
console.log(number);


function calc(a, b) {
    return a + b;

}

console.log(calc(5, 10));
console.log(calc(1, 10));
console.log(calc(4, 10));
console.log(calc(98, 10));

// funcion declaration
function returnNumber() {
    let number = 8;
    return number;
}
const num = returnNumber();
console.log(num)

// funktion expression
const funcExpr = function () {
    console.log(10);
};
funcExpr();


//array fucktion
const arrayFunction = (c, d) => {
    return c + d;
}

const plus = arrayFunction(10, 19);
console.log(plus);
