const express = require("express");

const app = express();

// app.use(allBooks);

app.get("/books", allBooks,function (req,res) {
    res.send({
        Book1 : "Harry Potter",
        Type : "Adventure",
    
        Book2 : "Avengers",
        Type2 : "Action-Adventure",
    
    
        Book3 : "Naruto",
        Type3 : "Adventure",
    
        Book4 : "One Piece",
        Type4 : "Action",
    });
})



function allBooks(req,res,next){
    console.log("Fetching all books");
    next();   
}

app.listen(6000, () => {
    console.log("Listening to port 6000");
})
    
