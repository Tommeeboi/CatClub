const smol = document.getElementById("smol");

let rng = Math.floor(Math.random() * 6);

let response = '';

switch (rng) {
    case 0:
        response = "WELCOME TO AMERICA";
        break;
    case 1:
        response = "give me moneh";
        break;
    case 2:
        response = "Don't tell me you're actually buying this stuff.";
        break;
    case 3:
        response = "Isn't Kiki stylish?";
        break;
    case 4:
        response = "Also try: Cat Club - Home!";
        break;
    case 5:
        response = "Play BOO instead. Or anything else. I'm desperate";
        break;
    default:
        response = "Message glitched. Contact Tommeeboi lmao";
        break;
}

smol.innerText = response;