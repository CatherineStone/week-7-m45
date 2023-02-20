const express = require("express");

const app = express();

app.use("/", express.static("books"));
app.use("/movies", express.static("movies"));

app.listen(5001, () => console.log("Server is listening on port 5001"));