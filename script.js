const startIcon = document.querySelector(".start-icon");
const startMenu = document.querySelector(".start-menu");

startIcon.addEventListener("click", function () {
    startMenu.style.display =
        startMenu.style.display === "block" ? "none" : "block";
});