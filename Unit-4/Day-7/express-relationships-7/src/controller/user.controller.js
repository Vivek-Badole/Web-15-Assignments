const express = require("express");
const User = require("../model/user.model");
const router = express.Router();


router.get("/",async (req,res) => {
    try {
        const users = await User.find().lean().exex();
        return res.status(200).send(users); 
    } catch (err) {
       return res.status(500).send(err);
    }
  
});

router.post("/",async (req,res) => {
    try {
        const user = await User.create(req.body);
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send(err);
    }
})

module.exports = router;