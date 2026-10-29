const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.question("How many numbers? ", function(n) {
    let count = Number(n);

    function getNumbers(i) {
        if (i < count) {
            rl.question("Enter a number: ", function(num) {
                arr.push(Number(num));
                getNumbers(i + 1);
            });
        } else {
            let result = evenNumbers(arr);

            console.log("Original Array:", arr);
            console.log("Even Numbers Array:", result);

            rl.close();
        }
    }

    function evenNumbers(arr) {
        let evenArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenArr.push(arr[i]);
            }
        }

        return evenArr;
    }

    getNumbers(0);
});