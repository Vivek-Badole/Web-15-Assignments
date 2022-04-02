const express = require("express");
const Student = require("../model/student.model");
const Evaluation = require("../model/evaluation.model");


const router = express.Router();




router.get("",async (req,res) => {
    try {
        const evaluations = await Evaluation.find().lean().exex();
        return res.status(200).send(evaluations); 
    } catch (err) {
       return res.status(500).send(err);
    }
  
});

router.post("",async (req,res) => {
    try {
        const evaluation = await Evaluation.create(req.body);
        return res.status(200).send(evaluation);
    } catch (err) {
        return res.status(500).send(err);
    }
})

router.get("/:evaluationId/students",async (req,res) => {
    try {
        const students = await Student.find({evaluationId : req.params.evaluationId}).lean().exex();
        return res.status(200).send(students); 
    } catch (err) {
        return res.status(500).send(err); 
    }
  
});

module.exports = router;