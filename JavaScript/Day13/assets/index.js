const paragraph = document.getElementById("myParagraph");
        const hideButton = document.getElementById("hideButton");
        const showButton = document.getElementById("showButton");

        hideButton.addEventListener("click", () => {
            paragraph.style.display = "none";
        });

        showButton.addEventListener("click", () => {
            paragraph.style.display = "block";
        });