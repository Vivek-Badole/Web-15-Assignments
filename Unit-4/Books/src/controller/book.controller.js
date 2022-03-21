
const express = require("express");

const Book = require("../model/book.model");

const rouetr = express.Router();

router.post("",async(req,res)=>{
    const book = await Book.create(req.body);
        return res.status(200).send({book});
})
    router.post("/image",async(req,res) => {
        const book = await Book.create(req.body)
        return res.send({book})
    })

module.exports = router;