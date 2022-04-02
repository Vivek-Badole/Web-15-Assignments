const mongoose = require("mongoose");

const checkedoutSchema = new mongoose.Schema({
    checkedOutTime : {type : Date,default : null},
    checkedInTime : {type : Date,default : null},
    userId : {type : mongoose.Schema.Types.ObjectId,ref : "user",required : true},
    bookId  : {type : mongoose.Schema.Types.ObjectId,ref : "book",required  :true},
    
},{
    versionKey  :false,
    timestamps : true
})

module.exports = mongoose.model("checkedout",checkedoutSchema);