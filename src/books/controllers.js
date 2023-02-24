const Book = require("./model");

//GET route: get all books
const getAllBooks = async (request, response) => {
    const allBooks = await Book.find({});

    console.log(allBooks);

    const successResponse = {
        message: "Response sent successfully",
        books: allBooks,
    };

    response.send(successResponse);
};


const getOneBook = async (request, response) => {
    const oneBook = await Book.findOne({title: request.body.title});

    console.log(oneBook);

    const successResponse = {
        message: "Successfully found book by title",
        oneBook: oneBook,
    };

    response.send(successResponse);
};

//POST route: post a book
const addNewBook = async (request, response) => {
    const newBook = await Book.create(request.body);

    console.log(newBook);

    const successResponse = {
        message: "Successfully added to DB",
        newBook: newBook,
    };

    response.send(successResponse);
};

//PUT route: update a book
const updateBook = async (request, response) => {


  const filterObj = { title: request.body.title };
  const updateObj = { [request.body.updateKey]: request.body.updateValue };

    const updatedBook = await Book.updateOne(filterObj, updateObj);

    const successResponse = {
        message: "Successfully updated on DB",
        updatedBook: updatedBook,
    };
    
    response.send(successResponse);
};

//DELETE route: delete a book
const deleteBook = async (request, response) => {
    const deletedBook = await Book.deleteOne({ title: request.body.title });

    const successResponse = {
        message: "Successfully deleted from DB",
        deletedBook: deletedBook,
    };

    response.send(successResponse);
};


module.exports = {
    getAllBooks,
    addNewBook,
    updateBook,
    deleteBook,
    getOneBook
}