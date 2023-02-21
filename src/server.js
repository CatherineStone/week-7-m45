const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());


// app.use("/", express.static("books"));

// app.get("/movies", (request, response) => {
//     response.send("Hello from the movie route!")
// });

// app.get("/book", (request, response) => {

// const book = {
//     title: "Lord of the rings",
//     author: "tolkein",
//     genre: "fantasy",
// };

// const successResponse = {
//     message: "response sent successfully",
//     book: book,
// };
// response.send(successResponse);
// });


// {
//     "title": "Matilda",
//     "author": "Roald Dahl",
//     "genre": "childrens"
//     }

// app.post("/book", (request, response) => {
//     console.log(request.body);
//     response.send("Hello from the post route!");


// app.post("/book", (request,response) => {

//     const newBook = {
//         id: Math.floor(Math.random() *50),
//         title: request.body.title,
//         author: request.body.author,
//         genre: request.body.genre,
//     };

//     const successResponse = {
//         message: "Successfully added to DB",
//         newBook: newBook,
//     };

//     response.send(successResponse);
// });

app.put("/book", (request, response) => {
    const newBook = {
                id: Math.floor(Math.random() *50),
                title: request.body.title,
                author: request.author.title,
                genre: request.body.genre,
            };
        
            const successResponse = {
                message: "Successfully added to DB",
                newBook: newBook,
            };
        
            response.send(successResponse);
})

app.listen(5001, () => console.log("Server is listening on port 5001"));