const express = require("express");
const Book = require("../model/book.model.js");

const router = express.Router();



router.get("", async(req,res) => {
    try{
        const books = await Book.find().lean().exec();
    return res.status(200).send(books);
    }catch (err){
        return res.status(500).send({message : err.message});
    }
    
})
router.post("", async(req,res) => {
    try{
        const book = await Book.create(req.body);
    return res.status(200).send(book);
    }catch (err){
        return res.status(500).send({message : err.message});
    }
    
});
module.exports = router;