const mongoose = require("mongoose");

// Creating an author schema
const AuthorSchema = mongoose.Schema({
    id: Number,
    name: String,
    books: [String],
});

// Creating an author model
const AuthorModel = mongoose.model(AuthorSchema);

module.exports = AuthorModel;
