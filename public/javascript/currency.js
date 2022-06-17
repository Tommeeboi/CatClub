// the popup itself
const currency = document.getElementById("currencyButton");
const popup = document.getElementById("popBG");

// these are the buttons on the popup
const pounds = document.getElementById("pound");
const usd = document.getElementById("usd");
const cad = document.getElementById("cad");
const aod = document.getElementById("aod");
const euros = document.getElementById("euro");
const other = document.getElementById("other");

// The way this thing works is by manually giving the products their prices. The reason for this is different currencies. :)
// They are let variables because they get reassigned when changing currencies
let halfQuid = 0.49;
let oneQuid = 0.99;
let twoQuid = 1.99;
let threeQuid = 2.99;

// the prices of the products
const kkrb = document.getElementById("kkrbPrice");
const ccl = document.getElementById("cclPrice");
const ccw = document.getElementById("ccwPrice");

currency.onclick = function() {
    popup.style.display = "block";
}

const defaultPopup = '<div id="currencyPopup">Not Your Currency?<br><div class="smol">Please select a currency from the available options:</div><div class="currencyBar"><button class="miniHome">Pounds</button><button class="miniHome">Dollars (US)</button><button class="miniHome" title="Canada">Dollars (CA)</button><br><button class="miniHome">Dollars (AU)</button><button class="miniHome">Euros</button><button class="miniHome" id="other">Other</button></div></div>';

// i had to literally copy and paste the popup code into the string, so quite a few changes had to be made lmao
// also this code is garbage
other.onclick = function() {
popup.innerHTML = '<div id="currencyPopup">Not Your Currency?<br><div class="smol">Oh no! Still can\'t find your currency?<br>Don\'t worry! When you go to pay for your item, the money will be automatically transferred to your currency. If it\'s still wrong, be sure to contact me (Tommeeboi) :)</div><div class="currencyBar"><button class="miniHome" id="back">Back To Shop</button></div></div>';
const backButton = document.getElementById("back");
backButton.onclick = function() {
    location.reload();
}
}

// This is my first time using function parameters, so sorry if this is hard to read :)
function convert(textPrice, price, multiplier, symbol) {
    const fixedPrice = price * multiplier;
    textPrice.innerText = `${symbol}${fixedPrice.toFixed(2)}`;
}

pounds.onclick = function() {
    popup.style.display = "none";
    convert(kkrb, threeQuid, 1, '£');
    convert(ccl, twoQuid, 1, '£');
    convert(ccw, halfQuid, 1, '£');
}

usd.onclick = function() {
    popup.style.display = "none";
    convert(kkrb, threeQuid, 1.25, '$');
    convert(ccl, twoQuid, 1.25, '$');
    convert(ccw, halfQuid, 1.25, '$');
}

cad.onclick = function() {
    popup.style.display = "none";
    convert(kkrb, threeQuid, 1.59, '$');
    convert(ccl, twoQuid, 1.59, '$');
    convert(ccw, halfQuid, 1.59, '$');
}

aod.onclick = function() {
    popup.style.display = "none";
    convert(kkrb, threeQuid, 1.74, '$');
    convert(ccl, twoQuid, 1.74, '$');
    convert(ccw, halfQuid, 1.74, '$');

    const sound = new Howl( {
        src: ['../misc/aodSecond.mp3'],
        volume: 0.02,
        onend: function() {
            console.log("get abyss of darkness'd");
          }
      } );
      sound.play();
}

euros.onclick = function() {
    popup.style.display = "none";
    convert(kkrb, threeQuid, 1.16, '€');
    convert(ccl, twoQuid, 1.16, '€');
    convert(ccw, halfQuid, 1.16, '€');
}