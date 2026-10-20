
const arr = [];

const oneInput = document.getElementById("oneinput");
const twoInput = document.getElementById("twoinput");
const threeInput = document.getElementById("threeinput");
const fourInput = document.getElementById("fourinput");
const fiveInput = document.getElementById("fiveinput");
const sixInput = document.getElementById("sixinput");

const addButton = document.getElementById("addbutton");

addButton.addEventListener("click", function () {
    const num1 = Number(oneInput.value);
    const num2 = Number(twoInput.value);

    const result = num1 + num2;

    arr.push(result);

    console.log("Result:", result);
    console.log("Array:", arr);
});
