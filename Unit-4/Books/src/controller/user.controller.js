
const express = require("express");

const User = require("../model/user.model");

const rouetr = express.Router();

router.post("",async(req,res)=>{
    try{const user = await User.create(req.body);
        return res.status(200).send(user)
    }catch(err){
        console.log(err);
    }
    
})

module.exports = router;