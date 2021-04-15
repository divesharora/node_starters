const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");

async function signup(req, res, next) {
  try {
    //firstly salt the hashing for the password
    //genSalt is math.pow(2, value)
    const salt = await bcrypt.genSalt(10);
    //hash the password
    hashedpassword = await bcrypt.hash(req.body.password, salt);
    const emailAlreadyExists = await User.findOne({ email: req.body.email });
    if (emailAlreadyExists && req.body.email !== undefined) {
      throw "Email already exists!";
    }
    const userData = {
      ...req.body,
      password: hashedpassword,
    };
    var user = new User({
      ...userData,
    });
    const userSignup = await user.save();
    const payload = {
      _id: userSignup._id,
    };

    //creating jwt token
    jwt.sign(payload, process.env.JWT_KEY, { expiresIn: 600 }, (err, token) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send({
          message: "User Signed In",
        });
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
}

//login

async function login(req, res, next) {
  try {
    //check whether email exists
    const user = await User.findOne({ email: req.body.email });
    const checkpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!user) {
      res.status(400).send({
        message: "Email not found!",
      });
    }

    //compare the passwords
    else if (!checkpassword) {
      res.status(403).send({
        message: "Password is incorrect!",
      });
    } else {
      // create token and add it to the header file
      const token = jwt.sign({ _id: user.id }, process.env.JWT_KEY, {
        expiresIn: 6000,
      });
      res.header("auth-token", token).json({
        Token: token,
        message: "You have successfully logged in!",
      });
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}

module.exports = {
  signup,
  login,
};
