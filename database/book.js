const mongoose = require("mongoose");

// Creating a book schema
const BookSchema = mongoose.Schema({
    ISBN: String,
    title: String,
    authors: [Number],
    language: String,
    pubDate: String,
    numOfPage: Number,
    category: [String],
    publication: Number,
});

// Creating a book model
const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;