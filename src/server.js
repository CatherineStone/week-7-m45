require("dotenv").config();
require("./db/connection");

const { response } = require("express");

const express = require("express");
const cors = require("cors");


const bookRouter = require("./books/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(bookRouter);


app.listen(5001, () => console.log("Server is listening on port 5001"));