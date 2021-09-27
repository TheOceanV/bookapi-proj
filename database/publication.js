const mongoose = require("mongoose");

// Creating an publication schema
const PublicationSchema = mongoose.Schema({
    id: Number,
    name: String,
    books: [String],
});

// Creating an Publication model
const PublicationModel = mongoose.model("publications", PublicationSchema);

module.exports = PublicationModel;
