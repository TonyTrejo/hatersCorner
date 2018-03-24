//headlines
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

let freePressSchema = new Schema({
    headline: {
        type: String,
        require: true,
        unique: { index: { unique: true } }
    },
    summary: {
        type: String,
        require: true,
    },
    url: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    },
});

var freePressArticle = mongoose.model('freePressAricle', freePressSchema);

module.exports = freePressArticle;