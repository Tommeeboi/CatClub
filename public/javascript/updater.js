const popupp = document.getElementById("popBG2");
const cancoll = document.getElementById("cancel2");
const procedd = document.getElementById("proceed2");
const popBoxx = document.getElementById("updatePopup");

const hateMyself = `# Cat Club
This. My biggest project.

I'm kinda miffed that this is my biggest project, but oh well.

To run this locally, scroll down a bit.

## What the hell is this
So, get ready for a biggie.

There is a company called Ty. Ty make a type of toy called Beanie Boos. My sister (Emma1000) collects these Beanie Boos. Some of them are cats.

I was forced to include my juniper plushie in this, so I did.

This is a website I made for my sister (and for my boredom), called Cat Club. It a way too detailed website for them, and just a fun little thing I made.

## How do I run this
To run this locally for some reason, do this.

If you need a more detailed explanation, go to tutorial.md

1. Install Node.js if you haven't already
2. Download this repository (as a zip)
3. Unzip it
4. Open cmd/shell/bash in the website's directory (the folder with package.json and index.js inside)
5. Type \`npm i\` to generate package-lock.json
6. Type \`node index\` to run index.js (the node server)
7. Cat Club is now running on http://localhost:9000

To change the port (the number at the end of the link):

1. Open index.js (you can do it with notepad if you want)
2. Find \`const port = 9000\`
3. Change the number to whatever you want (anything from 1000 to 9999)

If you run the site successfully, a message will appear in the terminal saying \`Success! Cat Club is running on http://localhost:9000 :)\` (The 9000 may be different depending on what port you choose)

## FAQ
Q. Can I run Cat Club without Node.js?

A. Not really. You can technically just open index.html, but navigating the site is a pain and a half

Q. How did you make Dotty's background?

A. With awfully written Javascript. It's not the best background, but it'll do for now.

Q. Can I help with making this site's code good?

A. Of course! If you want to edit the site and fix my code, just download this repository and fix/change whatever you want. If you could try and make Dotty's RGB background better and smoother, that would be greatly appreciated! You can send me your fixed version through Discord (my name is Tommeeboi#9131), and maybe even have your code implemented into the real site! (With credit, of course)

Q. Why you so bad at code

A. I am not, I just code in a unique way (I totally just suck)

## Releases
Beta v1.0: The first beta. It had five members, with only two of them with pages!

Beta v1.1: Almost completed, just two more member pages and the credits page left to do.

v1.0: Initial Release.

v1.0.1: Typo fixes.

v1.1: THREE new members: Mai, Asia, and Pandora! Also stated that I'm the owner of Juniplush in her page and the credits. The credits page now also has it's own tab icon: Frederick Johnson. Find him on Soundcloud lmao

v1.1.1: New warning when attempting to go to Dotty's page (for people with epilepsy). Also updated license. You may find some 1.2 hints in the code, just saying... (this update changed/added 36 files)

v1.1.2: I actually need a list lmao

1. Added a new member: Ash!
2. Edited Livvie's page to display her name as Livvie, as Emma said Livvy is wrong.
3. Heather's parents are no longer dead.
4. Dotty's popup is now animated (credit to colon for the animation xd)

v1.2 (LATEST): Added a system that detects if you're current version of Cat Club is outdated. If it does, it gives you a popup. I've decided to make the upcoming section (look in the code ;) of the website a 1.3 thing instead, because I've added so many new features that it basically counts as a whole update xD`

$.ajax({
    url: 'https://raw.githubusercontent.com/Tommeeboi/CatClub/master/README.md',
    type: 'GET',
    success: function(res) {
       let data = $.parseHTML(res);

       if (data[0].data !== hateMyself) {
        document.getElementById("popBG2").style.display = "block";

        document.getElementById("proceed2").onclick = function() {
            document.getElementById("popBG2").style.display = "none";
        }
       }
    }
  });