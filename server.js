var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

const PORT = 3000 || process.env.PORT;

var app = express();
// require models folder
var db = require('./models');
var routes = require('./routes/index.js');

//body parser in the app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, function () {
    console.log("Connection...");
});

app.get('/', function (req, res) {
    res.send('working....');
})
// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/hatersCorner", {
    //useMongoClient: true,
    //console.log('db connected')
});
