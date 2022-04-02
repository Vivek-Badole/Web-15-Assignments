const express = require("express");


const userController = require("./controller/user.controller");
const sectionController = require("./controller/section.controller");
const bookController = require("./controller/book.controller");
const bookauthorController = require("./controller/bookauthor.controller");
const authorController = require("./controller/author.controller");
const checkedoutController = require("./controller/checkedTime.controller");

const connect = require("./configs/db");
const app = express();

app.use(express.json());


app.use("/users",userController);
app.use("/sections",sectionController);
app.use("/books",bookController);
app.use("/bookauthors",bookauthorController);
app.use("/authors",authorController);
app.use("/checkedouts",checkedoutController);

app.listen(6000, async () => {
    try {
        await connect();
        
    } catch (err) {
        console.log(err);
    }
    console.log("Listening on port 6000");
});