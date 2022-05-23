/* 
Welcome! If you need reminding of how this works:
Once you've navigated to the main folder, type 'npm i', then type 'node index'. (In the terminal)
If you don't want the port to be 9000, change the value of the port variable (from 1 to 9999).
To close the server, use Ctrl+C in the terminal (or just close the terminal itself).

To get to the folder using the terminal, use 'cd' followed by the full directory (example: 'cd C:\Users\Tommeeboi\Downloads\CatClub-master\CatClub-master).
But obviously replace Tommeeboi with the name of your user folder

Good luck editing the file where I pretend to know what's going on!

Idk how much of this is helpful on Mac so sorry 'bout that

Btw, opening the site by using Live Server or just going to the file:// link won't work properly so don't bother

Credit to Colon for the app.get stuff
*/

// Express.js Modules
const express = require("express")
const res = require("express/lib/response")
const app = express()

// Only reads the files in the public folder
app.use(express.static("public"))

// Gives all the pages their links instead of '/public/html/blahblah.html'
app.get("/heather", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/heather.html") })
app.get("/juniplush", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/juniplush.html") })
app.get("/kiki", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/kiki.html") })
app.get("/dotty", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/dotty.html") })
app.get("/glamour", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/glamour.html") })
app.get("/livvy", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/livvy.html") })
app.get("/reagan", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/reagan.html") })
app.get("/tiggy", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/tiggy.html") })
app.get("/comingsoon", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/comingsoon.html") })
app.get("/credits", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/credits.html") })
app.get("/buckwheat", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/buckwheat.html") })
app.get("/mai", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/mai.html") })
app.get("/asia", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/asia.html") })
app.get("/pandora", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/pandora.html") })
app.get("/ty", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/tywarning.html") })
app.get("/", function(req, res) { res.status(200).sendFile(__dirname + "/public/html/index.html") })

// Port Variable
const port = 9000;

// Tells the program to host the website on whatever port you chose and sends a message to the console
app.listen(port, () => console.log(`Success! Cat Club is running on http://localhost:${port} :)`))