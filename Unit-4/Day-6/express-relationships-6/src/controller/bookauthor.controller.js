const express = require("express");
const BookAuthor = require("../model/bookauthor.model");

const router = express.Router();



router.get("/:authorId/books", async(req,res) => {
    try{
        const bookauthors = await BookAuthor.find({authorId : req.params.authorId}).populate("bookId").lean().exec();
    return res.status(200).send(bookauthors);
    }catch (err){
        return res.status(500).send({message : err.message});
    }
    
})
module.exports = router;