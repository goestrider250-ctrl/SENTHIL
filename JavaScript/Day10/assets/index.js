let salary = 20000;

salary = 25000;

console.log("Final Salary:", salary);
const country = "India";

console.log("My Country is", country);

let name = "Arun";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);

let price = 500;
let quantity = 4;

let total = price * quantity;

console.log(`Total Price = ${total}`);

function greet(name = "Guest") {
    console.log(`Welcome ${name}`);
}

greet("Arun");
greet();