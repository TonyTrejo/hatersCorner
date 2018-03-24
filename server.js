var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

const PORT = 3000;

// require models folder
var db = reguire('./models');

    // route to scrape SD Rostra
app.get("/scrape", function(req, res){
    axios.get("http://sdrostra.com").then(function(response){
        let $ = cheerio.load(response.data);
        //grab the article tag
        $("")
    })
})