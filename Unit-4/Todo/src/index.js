const express = require("express");
const connect = require("./config/db");

const app = express();
app.use(express.json())

const userController = require("./controller/user.controller");

app.use("/user",userController);

app.listen(6000,async ()=> {
    try {
        await connect();
        console.log("Listening to port 6000");
    } catch (error) {
       console.log(error); 
    }
})