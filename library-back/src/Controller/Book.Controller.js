const BookModel = require("../Model/Book.Model");

/*
    #BOOK MODEL
    book_name,
    book_author,
    book_id,
    book_pages_number,
    book_category,
*/
async function getBook(req, res) {
    let id = req.params.id;
    try {
        let book = await BookModel.findById(id)
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

async function getAllBooks(req, res) {
    try {
        let allBooks = await BookModel.find();
        res.status(200).json(allBooks)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

async function createBook(req, res) {
    const newBook = new BookModel({
        book_name: req.body.book_name,
        book_author: req.body.book_author,
        book_id: req.body.book_id,
        book_pages_number: req.body.book_pages_number,
        book_category: req.body.book_category,
    })

    try {
        let book = await newBook.save();
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

async function updateBook(req, res) {
    try {
        let bookUpdated = await BookModel.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    book_name: req.body.book_name,
                    book_author: req.body.book_author,
                    book_id: req.body.book_id,
                    book_pages_number: req.body.book_pages_number,
                    book_category: req.body.book_category,
                }
            }

        )
        res.status(200).json(bookUpdated)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

async function deleteBook(req,res) {
    let id = req.params.id;
    try {
        await BookModel.findByIdAndDelete(id)
        res.status(200).send("Operation Success...")
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports = {
    getBook,
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
}