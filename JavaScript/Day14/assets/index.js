// task3
let number = 25;
if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}


// task4
let val1 = "Arun";
let val2 = 25;
let val3 = true;
let val4 = undefined;

console.log(typeof val1); // string
console.log(typeof val2); // number
console.log(typeof val3); // boolean
console.log(typeof val4); // undefined


// task5
let a = 10;
let b = 20;
console.log("Before swap: a =", a, ", b =", b);

let temp = a;
a = b;
b = temp;

console.log("After swap: a =", a, ", b =", b);