const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.models");

const router = express.Router();

router.post( "/",
  body("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First Name cannot be empty")
    .isLength({ min: 4 })
    .withMessage("First Name must be at least 4 characters"),

    body("lastName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Last Name cannot be empty")
    .isLength({ min: 4 })
    .withMessage("Last Name must be at least 4 characters"),

  body("email")
    .isEmail()
    .not()
    .isEmpty()
    .withMessage("Email cannot be empty")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),

    body("pincode")
    .notEmpty()
    .withMessage("Pincode cannot be empty")
    .isNumeric()
    .withMessage("Pincode must be a number")
    .isLength({min : 6,max : 6})
    .withMessage("Pincode length should be of 6 digit"),
    
    
  body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number between 1 and 100")
    .custom((val) => {
      if (val < 1 || val > 100) {
        throw new Error("Incorrect age provided");
      }
      return true;
    }),

  body("gender")
  .notEmpty()
  .withMessage("gender cannot be empty"),
  // .custom((value) => {
  //   if(value != "Male")
  //   {
  //     throw new Error("Gender is incorrect");
  //   }
    
  //   return true;
  // }),
  async (req, res) => {
    try {
      console.log(body("gender"));
      const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

module.exports = router;
