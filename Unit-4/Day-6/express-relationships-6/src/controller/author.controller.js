const express = require("express");

const Author = require("../model/author.model")


const router = express.Router();

router.get("", async (req,res) => {
    try {
       const authors = await Author.find().lean().exec();
        return res.status(200).send(authors);
    } catch (err) {
        return res.status(500).send({message : err.message})
    }
});

router.post("", async (req,res) => {
    try {
       const author = await Author.find();
        return res.status(200).send(author);
    } catch (err) {
        return res.status(500).send({message : err.message})
    }
});
module.exports = router;

