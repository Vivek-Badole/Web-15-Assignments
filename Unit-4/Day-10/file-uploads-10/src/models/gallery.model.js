const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    profilePic: [{ type: String, required: false }],
    userId : {type : mongoose.Schema.Types.ObjectId,ref : "user",required: false}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("gallery", gallerySchema);
