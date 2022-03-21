const mongoose = require("mongoose");
const connect = ()=>{
    return mongoose.connect("mongodb+srv://Narutoluffy:mongodbatlas1@cluster0.zy6ct.mongodb.net/Mern111?retryWrites=true&w=majority")
}
module.exports = connect;