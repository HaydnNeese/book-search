const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Same as "/api/books"
router.route('/')
.get(booksController.findAll)
.post(booksController.saveBook);

// Same as "/api/books"
router.route("/:id")
.delete(booksController.deleteBook);

module.exports = router;

//make the save button access the database and save the book
//to the db googlebooks in the collection books

//