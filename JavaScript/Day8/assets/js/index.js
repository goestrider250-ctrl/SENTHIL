 let numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50];

        let evenNumbers = (arr) => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    console.log(arr[i]);
                }
            }
        };

        evenNumbers(numbers);


        
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}

console.log(checkEvenOdd(10));



function findLargest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(findLargest(25, 40));



function checkVote(age) {
    if (age >= 18) {
        return "Eligible to Vote";
    } else {
        return "Not Eligible to Vote";
    }
}

console.log(checkVote(20));