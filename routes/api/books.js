const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route('/')
  .post(booksController.saveBook);

router.route("/search")
  .get(booksController.findAll)
  .delete(booksController.deleteBook);



//make the save button access the database and save the book
//to the db googlebooks in the collection books

//