// Sorry for my awful and unclear code
// Basically, this generates an RGB background for Dotty's page.
// Becuase she's covered in rainbow, I managed to finally make an excuse to implement Javascript into this website lol

let red = 0;
let green = 0;
let blue = 0;

// For some reason I never use true and false so pls don't be mad
// The variables that decide when the colours are allowed to change

let redAllowed = 0;
let greenAllowed = 0;
let blueAllowed = 0;

// The functions that up the values of the colours
// I know I could have just used one function with a single parameter as the colour, but it didn't work for some reason and I couldn't be bothered to fix it

function redUp() {
    red += 1;
}
function greenUp() {
    green += 1;
}
function blueUp() {
    blue += 1;
}

// Now, don't ask me about what's going on here cuz idk, I just build the basic function, then spent hours experimenting until it finally just about worked
function test() {
        if (red < 256 && redAllowed === 0) {
            redUp();
        }
        if (red > 254) {
            redAllowed = 1;
        }
        if (redAllowed === 1) {
            if (red > 0) {
                red -= 1;
            }
        }
        if (green < 256 && greenAllowed === 0 && redAllowed === 1) {
            greenUp();
        }
        if (green > 254) {
            greenAllowed = 1;
        }
        if (greenAllowed === 1) {
            green -= 1;
        }
        if (blue < 256 && blueAllowed === 0 && redAllowed === 1 && greenAllowed === 1) {
            blueUp();
        }
        if (blue > 254) {
            blueAllowed = 1;
        }
        if (blueAllowed === 1) {
            redAllowed = 0;
            greenAllowed = 0;
            blue -= 1;
            if (blue === 0) {
                blueAllowed = 0;
            }
        }
        // This takes the value of the RGB variables and replaces the background's values with theirs
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        // setTimeout is an api from Node.js that allows you to delay parts of your Javascript running. (Correct me if I'm wrong)
        // 1000 is 1 second, so 5 is a 200th of a second, which means the background changes colour 200 times every second
        // This also means that to create an infinite loop without your computer dieing, make a function that runs itself every time after a certain delay. (I know, I'm so cool)
    setTimeout(() => {
        test();
    }, 1)
}

// This line of code only runs once, and it just starts up the function. Once the function is run once, it will keep on running itself forever XD
test();