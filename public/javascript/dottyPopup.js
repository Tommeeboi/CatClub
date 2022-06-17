const dottyImage = document.getElementById("warn");
const popup = document.getElementById("popBG");
const againBtn = document.getElementById("heh");
const cancol = document.getElementById("cancel");
const proced = document.getElementById("proceed");
const popBox = document.getElementById("epilepsyPopup");

warn.onclick = function() {
    if (document.cookie === "dottyShow=a" || document.cookie === "") {
        popup.style.display = "block";
    } else if (document.cookie === "dottyShow=b") {
        location.replace("/dotty");
    }
}

let showAgain = 0;

againBtn.onclick = function() {
    if (showAgain === 0) {
        showAgain = 1;
        againBtn.style.backgroundColor = "hsl(120, 100%, 25%)";
        againBtn.innerText = "Don't Show Me Again (ON)";
        document.cookie = "dottyShow=b";
    } else if (showAgain === 1) {
        showAgain = 0;
        againBtn.style.backgroundColor = 'hsl(0, 100%, 60%)';
        againBtn.innerText = "Don't Show Me Again (OFF)";
        document.cookie = "dottyShow=a";
    }
}

cancol.onclick = function() {
    popup.style.display = "none";
}

proced.onclick = function() {
    location.replace("/dotty");
}