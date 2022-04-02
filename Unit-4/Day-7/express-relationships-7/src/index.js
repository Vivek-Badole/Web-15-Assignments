const express = require("express");
const connect = require("./configs/db");

const evaluationController = require("./controller/evaluation.controller");
const batchController = require("./controller/batch.controller");
const studentController = require("./controller/student.controller")
const userController = require("./controller/user.controller");


const app = express();

app.use(express.json());

app.use("/evaluations",evaluationController);
app.use("/batchs",batchController);
app.use("/users",userController);
app.use("/students",studentController);



app.listen(6000,async(req,res) => {
    try {
        await connect();
    } catch (err) {
        console.log(err);
    }
    console.log("Listening to port 6000");
})