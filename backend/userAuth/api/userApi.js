const express = require("express");
const userService = require("../services/userService");

const router = express.Router();

router.post("/user/signup", async (req, res) => {
  const { userName, password, email, phoneNumber, fullName } = req.body;
  try {
    const newUser = await userService.signUp(
      userName,
      password,
      fullName,
      email,
      phoneNumber,
      false
    );
    res
      .status(200)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.log({ message: error.message });
    res.status(400).json({ message: error.message });
  }
});

router.post("/user/login", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const token = await userService.logIn(userName, password, false);
    res.status(200).json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/admin/signup", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const newUser = await userService.signUp(userName, password, true);
    res
      .status(200)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/admin/login", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const token = await userService.logIn(userName, password, true);
    res.status(200).json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
