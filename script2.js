"use strick"

let number = 5;

function aligarh() {
    console.log("hello world");
    number = 10;
}
aligarh();
console.log(number);

function form(x, y) {
    return x + y;
}
console.log(form(453, 90));
console.log(form(153, 90));
console.log(form(1453, 90));
console.log(form(453, 90));
console.log(form(22, 90));


function returnNumber() {
    let number = 88;
    return number;
}
const num = returnNumber();
console.log(num);

const funcExp = function() {
    console.log(10);
}
funcExp();

const l = (c, d) => {
    return c + d;
}
const d = l(23, 33);
console.log(d);
