var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("home");
});

app.get('/about', function(req, res) {
    res.render("about");
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