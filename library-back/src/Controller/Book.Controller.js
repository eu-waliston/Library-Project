const BookModel = require("../Model/Book.Model");


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
        title: req.body.title,
        subtitle: req.body.subtitle,
        author: req.body.author,
        published: req.body.published,
        pages: req.body.pages,
        description: req.body.description,
        website: req.body.website,
        category: req.body.category,
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
                    title: req.body.title,
                    subtitle: req.body.subtitle,
                    author: req.body.author,
                    published: req.body.published,
                    pages: req.body.pages,
                    description: req.body.description,
                    website: req.body.website,
                    category: req.body.category,
                }
            }

        )
        res.status(200).send(bookUpdated)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

async function deleteBook(req, res) {
    let id = req.params.id;
    try {
        await BookModel.findByIdAndDelete(id)
        res.status(200).send("Operation Success...")
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = {
    getBook,
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
}