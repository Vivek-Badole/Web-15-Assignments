const express = require("express");
const Student = require("../model/student.model");

const router = express.Router();




router.get("",async (req,res) => {
    try {
        const students = await Student.find().lean().exex();
        return res.status(200).send(students); 
    } catch (err) {
        return res.status(500).send(err); 
    }
  
});

router.get("",async (req,res) => {
    try {
        const student= await Student.create(req.body);
        return res.status(200).send(student); 
    } catch (err) {
        return res.status(500).send(err); 
    }
  
});

module.exports = router;