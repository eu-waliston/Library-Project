const express = require('express')

let BookRouter = express.Router();

const  {
    getBook,
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
} = require("../Controller/Book.Controller");

BookRouter.get("/magic-library/api/v1/get-a-book/:id", getBook);
BookRouter.get("/magic-library/api/v1/get-all-books", getAllBooks);
BookRouter.post("/magic-library/api/v1/create-a-book", createBook);
BookRouter.put("/magic-library/api/v1/update-a-book/:id", updateBook);
BookRouter.delete("/magic-library/api/v1/delete-a-book", deleteBook);

module.exports = BookRouter;