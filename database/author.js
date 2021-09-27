const mongoose = require("mongoose");

// Creating an author schema
const AuthorSchema = mongoose.Schema({
    id: Number,
    name: String,
    books: [String],
});

// Creating an author model
const AuthorModels = mongoose.model("authors", AuthorSchema);

module.exports = AuthorModels;
