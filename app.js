var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("home");
});

app.get('/about', function(req, res) {
    res.render("about")
});

app.get('/:query', function(req, res) {
    res.send("Welcome to the " + req.params.query + " page!");
});

app.listen(process.env.PORT, process.env.IP);