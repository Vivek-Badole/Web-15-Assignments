const mongoose = require("mongoose");

const bookAuthorSchema = new mongoose.Schema({
    bookId  : {type : mongoose.Schema.Types.ObjectId,ref : "book",required  :true},
    authorId  : {type : mongoose.Schema.Types.ObjectId,ref : "author",required  :true}
},{
    versionKey  :false,
    timestamps : true
})

module.exports = mongoose.model("bookauthor",bookAuthorSchema);