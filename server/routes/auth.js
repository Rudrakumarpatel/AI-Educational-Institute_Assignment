const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = new User({ username:email, email, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: "User  registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Signin route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({email});
    if (!user) return res.status(404).send({ message: "User  Not found." });

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) return res.status(401).send({ accessToken: null, message: "Invalid Password!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 86400 });
    res.status(200).send({ id: user._id, username: user.username, accessToken: token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;