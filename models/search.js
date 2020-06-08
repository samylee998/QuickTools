const mongoose = require("mongoose");

const searchSchema = mongoose.Schema({
    shoeName: String,
    image: String
});

module.exports = mongoose.model("Search", searchSchema);