
const express = require("express");
const Section = require("../model/section.model");
const Book = require("../model/book.model");
const router = express.Router();



router.get("", async(req,res) => {
    try{
        const sections = await Section.find().lean().exec();
    return res.status(200).send(sections);
    }catch (err){
        return res.status(500).send({message : err.message});
    }
    
})
router.post("", async(req,res) => {
    try{
        const section = await User.create(req.body);
    return res.status(200).send(section);
    }catch (err){
        return res.status(500).send({message : err.message});
    }
    
});
router.get("/:sectionId/books", async(req,res) => {
    try{
        const books = await Book.find({sectionId : req.params.sectionId}).lean().exec();
    return res.status(200).send(books);
    }catch (err){
        return res.status(500).send({message : err.message});
    }
    
})
module.exports = router;
