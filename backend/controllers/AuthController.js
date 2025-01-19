const { validationResult } = require("express-validator");
const User = require("../models/User");
const { responseMessage } = require("../utils/responseMessages");
const { JWT_SECRET } = require("../config");

const signup = async (req, res) => {
  // If any data is invalid, return bad request
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res
      .status(400)
      .json({ status: responseMessage.bad_request, error: errors.array() });
  } else {
    try {
      // Check whether the user with this email already exists
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({
          status: responseMessage.bad_request,
          error: "Sorry a user with this email already exists",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const securePass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: securePass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      const safeUser = user.toObject();
      delete safeUser.password;

      res.json({
        status: responseMessage.success,
        data: { authToken, user: safeUser },
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
};

const login = async (req, res) => {
  // If any data is invalid, return bad request
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ status: responseMessage.bad_request, error: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        status: responseMessage.bad_request,
        error: "Please login with correct credentials",
      });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      return res.status(400).json({
        status: responseMessage.bad_request,
        error: "Please login with correct credentials",
      });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    const safeUser = user.toObject();
    delete safeUser.password;

    res.json({
      status: responseMessage.success,
      data: { authToken, user: safeUser },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { signup, login };
