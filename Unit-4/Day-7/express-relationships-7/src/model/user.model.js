
const  mongoose  = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName : {type : String, required : true},
        lastName : {type : String, required : false},
        gender : {type : String, required : true},
        dateofBirth : {type : Date,required : false},
        type : {type : String,required : true},
    },{
        versionKey : false,
        timestamps : true,
    }
)

module.exports = mongoose.model("user",userSchema);