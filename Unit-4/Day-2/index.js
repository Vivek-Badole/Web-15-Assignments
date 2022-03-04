const express = require("express");

const app = express();

app.get("/", function (req,res) {
     res.send("hello");
})

app.get("/books",function (req,res){
    res.send({
    Book1 : "Harry Potter",
    Type : "Adventure",

    Book2 : "Avengers",
    Type2 : "Action-Adventure",


    Book3 : "Naruto",
    Type3 : "Adventure",

    Book4 : "One Piece",
    Type4 : "Action",
})
})

app.listen(8000,() => {
    console.log("Listening on port 8000");
})