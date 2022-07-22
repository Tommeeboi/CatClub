const dottyImage = document.getElementById("warn");
const popup = document.getElementById("popBG");
const againBtn = document.getElementById("heh");
const cancol = document.getElementById("cancel");
const proced = document.getElementById("proceed");
const popBox = document.getElementById("epilepsyPopup");

// If the dottyShow cookie is equal to a, it displays the popup. If it's b, it disables the popup
warn.onclick = function() {
    if (document.cookie === "dottyShow=a" || document.cookie === "") {
        popup.style.display = "block";
    } else if (document.cookie === "dottyShow=b") {
        location.replace("/dotty");
    }
}

// right clicking disables popup
warn.oncontextmenu = function() {
    location.replace("/dotty");
    return false;
}

let showAgain = 0;

// If Don't Show Me Again is said to ON, showAgain is set to 1, and dottyShow (the cookie) is set to b. For having DSMA set to OFF, you can kinda guess what happens
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

// The way I fixed the cancel bug in 1.3 is by setting DSMA and everything else to OFF when you click Cancel.
// Because you can only click Cancel when the popup is active, this solution turned out to be 3 lines of code xD
cancol.onclick = function() {
    againBtn.style.backgroundColor = 'hsl(0, 100%, 60%)';
    againBtn.innerText = "Don't Show Me Again (OFF)";
    document.cookie = "dottyShow=a";
    popup.style.display = "none";
}

// location.replace sends you to a certain URL, which is Dotty's page in this case
proced.onclick = function() {
    location.replace("/dotty");
}