const express = require("express");
const Batch = require("../model/batch.model")


const router = express.Router();




router.get("",async (req,res) => {
    try {
        const batchs = await Batch.find().lean().exex();
        return res.status(200).send(batchs); 
    } catch (err) {
       return res.status(500).send(err);
    }
  
});

router.post("",async (req,res) => {
    try {
        const batch = await Batch.create(req.body);
        return res.status(200).send(batch);
    } catch (err) {
        return res.status(500).send(err);
    }
})


module.exports = router;