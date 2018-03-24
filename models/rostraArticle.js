//headlines
var mongoose = require("mongoose");

// 
var Schema = mongoose.Schema;

let rostraSchema = new Schema({
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

var rostraArticle = mongoose.model('rostraArticle', rostraSchema);

module.exports = rostraArticle;