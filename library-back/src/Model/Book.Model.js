const mongoose = require("mongoose");

const NewBook = mongoose.Schema({
    book_name: {type: String},
    book_author: {type: String},
    book_id: {type: Number},
    book_pages_number: {type: Number},
    book_category: [String],
})

module.exports = mongoose.model("Book", NewBook);