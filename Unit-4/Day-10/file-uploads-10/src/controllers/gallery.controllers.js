const express = require("express");

const User = require("../models/user.models");
const Gallery = require("../models/gallery.model");
const upload = require("../middlewares/uploads");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const gallerys = await Gallery.find().lean().exec();

    return res.status(200).send(gallerys);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/multiple", upload.any("profilePic"), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => {
      return file.path;
    });

    const gallery = await Gallery.create({
      profilePic: filePaths,
      userId : req.body.userId,
    });

    return res.status(200).send(gallery);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;