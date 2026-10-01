let line = "";

// 1 to 100
for (let a = 1; a <= 100; a++) {
    line = line + " " + a;
}

// Odd numbers
for (let add = 1; add <= 100; add++) {
    if (add % 2 !== 0) {
        line = line + " " + add;
    }
}

// Even numbers
for (let even = 1; even <= 100; even++) {
    if (even % 2 === 0) {
        line = line + " " + even;
    }
}

//  console.log
console.log(line);