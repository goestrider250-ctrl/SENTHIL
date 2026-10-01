let fruits = ["mango","apple","banana","orange",];
console.log(fruits);


let colour =["red","blue","black","green"];
colour[1]="white"
console.log(colour);


let stName =["senthil","meju","kumaran","luna"];
for (let i = 0; i < stName.length; i++) {
console.log(stName[i]);
}

let marks = [80, 70, 90, 60, 85];
        let total = 0;

        for (let i = 0; i < marks.length; i++) {
            total = total + marks[i];
        }

        console.log("Total = " + total);



 let numbers = [2, 4, 6, 8, 10];

        for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i] * 2);
        }


let employee = {
            name: "Arun",
            salary: 25000,
            role: "Developer"
        };

        employee.salary = 30000;

        console.log(employee);