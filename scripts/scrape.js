var axios = require("axios");
var cheerio = require("cheerio");
var logger = require("morgan");

var models = require('./models')
// route to scrape SD Rostra
app.get("/scrape", function (req, res) {
    axios.get("http://sdrostra.com").then(function (response) {
        //selector   
        let $ = cheerio.load(response.data);
        //grab the article tag (I don't understand how to aply the selector link)
        $("entry-title h2").each(function (i, element) {
            var result = {};

            result.title = $(this)
                .children("a")
                .text();

            result.link = $(this)
                .children("a")
                .attr("href");
        });
    });

    res.send("Scrape Complete");
});

// scrape free press
app.get("/scrape", function (req, res) {
    axios.get("http://https://sandiegofreepress.org/").then(function (response) {
        //selector   
        let $ = cheerio.load(response.data);
        //grab the article tag (I don't understand how to aply the selector link)
        $("entry-title h2").each(function (i, element) {
            var result = {};

            result.title = $(this)
                .children("a")
                .text();

            result.link = $(this)
                .children("a")
                .attr("href");
        });
    });

    res.send("Scrape Complete");
});