
const express = require("express");

const Comment = require("../model/comment.model");

const rouetr = express.Router();

router.post("",async(req,res)=>{
    try{const comment = await Comment.create(req.body);
        return res.status(200).send(comment)
    }catch(err){
        console.log(err);
    }
    
})

module.exports = router;