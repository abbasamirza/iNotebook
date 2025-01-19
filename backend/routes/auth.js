const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { signup, login } = require("../controllers/AuthController");

router.post(
  "/signup",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must contain atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  signup
);

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  login
);

module.exports = router;
