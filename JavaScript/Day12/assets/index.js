const aboutMe = document.getElementById("aboutMe");
const myName = document.getElementById("myName");
const myImage = document.getElementById("myImage");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {

    aboutMe.style.color = "blue";

    myName.style.color = "green";

    myImage.src = "assets/1.png";
    myImage.style.width = "200px";

});