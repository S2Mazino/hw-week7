const express = require("express");
const path = require("path");

const complements = [
    "you look nice today",
    "that dress looks great",
    "have you been working out?",
    "you can do hard things",
    "you've gotten far in this course, easier than you thought",
    "you're programming, how cool is that?",
    "go team",
    "you're so smart",
    "nice hair",
    "nice computer",
    "you smell good",
    "you have a nice shirt",
    "you're nice",
    "nice eyes",
    "nice beard"
];

const insults = [
    "Tell me… Is being stupid a profession or are you just gifted?",
    "Me pretending to listen should be enough for you.",
    "Zombies eat brains. You’re safe.",
    "I’d agree with you but then we’d both be wrong.",
    "No need for insults, your face says it all.",
    "Your intelligence is my common sense.",
    "You’re so ugly that when you cry, the tears roll down the back of your head…just to avoid your face.",
    "I’ll try being nicer, if you try being smarter.",
    "It’s not that you are weird…it’s just that everyone else is normal.",
    "Act your age not your shoe size.",
    "Scientists are trying to figure out how long human can live without a brain. You can tell them your age.",
    "Stupidity is not a crime so you are free to go.",
    "Just keep talking, I yawn when I’m interested."
];

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length)
    return insults[randomIndex];
}

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length)
    return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/insult", function(req, res) {
    res
        .json({
            insult: getRandomInsult()
        })
        .end();
})

app.get("/complement", function(req, res) {
    res
        .json({
            complement: getRandomComplement()
        })
        .end();
})

app.use("/public", express.static("./public"))

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);