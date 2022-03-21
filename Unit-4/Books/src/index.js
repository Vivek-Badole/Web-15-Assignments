const express = require("express");

const connect = require("./config/db");
const app = express();



app.listen(6000,async ()=>{
    try {
        await connect;
        console.log("listening to port 6000");
    } catch (error) {
        console.log(error);
    }
})