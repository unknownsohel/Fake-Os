const startIcon = document.querySelector(".start-icon");
const startMenu = document.querySelector(".start-menu");

startIcon.addEventListener("click", function () {
    startMenu.style.display =
        startMenu.style.display === "block" ? "none" : "block";
});

const startNotepad = document.querySelector(".Notepad-icon");
const startNotepadApp = document.querySelector(".Notepad-app")
startNotepad.addEventListener("click",function(){
    startNotepadApp.style.display= "block";
});

const closeNotepad = document.querySelector(".Notepad-app .notepad-head .buttons .close");
const closeNotepadApp = document.querySelector(".Notepad-app");
closeNotepad.addEventListener("click",function(){
    closeNotepadApp.style.display= "none";
});

const clickNotepaddt = document.querySelector(".Notepad-app .notepad-head");
const clickNotepad = document.querySelector(".Notepad-app .notepad-head .buttons .maximize");
const maxNotepadApp = document.querySelector(".Notepad-app");
clickNotepaddt.addEventListener("dblclick",function(){
    maxNotepadApp.style.width ="100%";
    maxNotepadApp.style.height="100%";
});