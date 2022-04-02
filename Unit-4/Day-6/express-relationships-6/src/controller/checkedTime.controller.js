const express = require("express");
const CheckedTime = require("../model/checkedout.model")

const router = express.Router();



router.get("", async(req,res) => {
    try{
        const CheckedTimes = await CheckedTime.find().populate("userId").populate("bookId").lean().exec();
    return res.status(200).send(CheckedTime);
    }catch (err){
        return res.status(500).send({message : err.message});
    }
    
})
router.post("", async(req,res) => {
    try{
        const CheckedTime = await CheckedTime.create(req.body);
    return res.status(200).send(CheckedTime);
    }catch (err){
        return res.status(500).send({message : err.message});
    }
    
});
module.exports = router;