const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/users", userController.createUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/users/:id", userController.findUserById);
router.get("/users", userController.findAllUser);
router.put("/users/:id", userController.updateUser);

router.post("/users/signup", userController.userSignUp);
router.post("/users/login", userController.userLogIn);

router.post("/admins/signup", userController.adminSignUp);
router.post("/admins/login", userController.adminLogIn);

module.exports = router;
