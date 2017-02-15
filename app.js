var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("home");
});

app.get('/about', function(req, res) {
    res.render("about");
});

app.get('/seasons', function(req, res) {
   var seasons = [
       {name: "Summer", weather: "Sunny"},
       {name: "Winter", weather: "Cold"},
       {name: "Fall", weather: "Windy"},
       {name: "Spring", weather: "Rainy"},
    ]; 
    
    res.render("seasons", {seasons: seasons});
});

app.post('/addfriend', function(req, res) {
    res.send("post route");
});

app.get('/friends', function(req, res) {
    var friends = ["Steven", "Shudeep", "Brent", "Erica", "Geoff", "Logan"];
    res.render("friends", {friends: friends});
});

app.get('/:query', function(req, res) {
    res.render("welcome", {query: req.params.query});
});

app.get("/repeat/:message/:times", function(req, res) {
   var message = req.params.message;
   var times = Number(req.params.times);
   
   var result = "";
   
   for(var i = 0; i < times; i++) {
       result += message + " ";
   }
   
   res.send(result);
});

app.listen(process.env.PORT, process.env.IP);