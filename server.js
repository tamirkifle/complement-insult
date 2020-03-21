const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
  ];
const insults = [
    "You suck",
    "What are you looking at?",
    "You're too lazy",
    "I don't like your pinky",
    "Can you even spell?",
    "You have ugly feet",
    "You're taking too much time",
    "You're a prefectionist aka a procrastinator"    
];

function getRandomElement(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/complements", function(req, res) {
    res
        .json({
            complement: getRandomElement(complements)
        })
        .end();
});
app.get("/insults", function(req, res) {
    res
        .json({
            insult: getRandomElement(insults)
        })
        .end();
});
app.use("/public", express.static("./public"));

app.listen(port, () => console.log(`Complements app listening on port ${port}!`));