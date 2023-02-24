const { Router } = require("express");
const bookRouter = Router();

const { getAllBooks, addNewBook, updateBook, deleteBook, getOneBook} = require("./controllers"); 

bookRouter.get("/books/getallbooks", getAllBooks);//GET route: get all books
bookRouter.get("/books/getonebook", getOneBook);
bookRouter.post("/books/addnewbook", addNewBook); //POST route: post a book
bookRouter.put("/books/updatebook", updateBook); //PUT route: update a book
bookRouter.delete("/books/deletebook", deleteBook); //DELETE route: delete a book

module.exports = bookRouter;