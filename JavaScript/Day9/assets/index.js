// Function Scope

let company = "ABC Technologies";

function showEmployee() {
    let employee = "Arun";

    console.log(company);
    console.log(employee);
}

showEmployee();
// console.log(employee); // Error - employee is function scoped


// let - Block Scope

if (true) {
    let age = 25;
    const city = "Chennai";

    console.log(age);
    console.log(city);
}

// console.log(age);  // Error - block scoped
// console.log(city); // Error - block scoped


// var - Not Block Scoped

if (true) {
    var varAge = 25;
    const varCity = "Chennai";

    console.log(varAge);
    console.log(varCity);
}

console.log(varAge);      // 25
// console.log(varCity);  // Error - const is block scoped


// var - Hoisting

console.log(name);
var name = "Arun";


// var - Declaration and Initialization

var employeeName;
console.log(employeeName); // undefined

employeeName = "Arun";
console.log(employeeName); // Arun


// let - Correct Way

let age = 25;
console.log(age);


// Function Hoisting

greet();

function greet() {
    console.log("Welcome to JavaScript");
}