const userService = require("../services/userService");

class userController {
  async userSignUp(req, res) {
    const {
      userName,
      password,
      email,
      phoneNumber,
      fullName
    } = req.body;
    try {
      const newUser = await userService.signUp(
        userName,
        password,
        email,
        phoneNumber,
        fullName,
        false
      );
      res
        .status(200)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.log({ message: error.message });
      res.status(400).json({ message: error.message });
    }
  }

  async userLogIn(req, res) {
    const { userName, password } = req.body;
    try {
      const token = await userService.logIn(userName, password, false);
      res.status(200).json(token);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async adminSignUp(req, res) {
    const { userName, password, email, phoneNumber, fullName } = req.body;
    try {
      const newUser = await userService.signUp(
        userName,
        password,
        email,
        phoneNumber,
        fullName,
        true
      );
      res
        .status(200)
        .json({ message: "Admin created successfully", user: newUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async adminLogIn(req, res) {
    const { userName, password } = req.body;
    try {
      const token = await userService.logIn(userName, password, true);
      res.status(200).json(token);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      const collection = await userService.collection;
      res
        .status(200)
        .json({
          message: "User created successfully",
          newUser,
          collection
        });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async findUserById(req, res) {
    try {
      const user = await userService.findUserById(req.params.id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async findAllUser(req, res) {
    try {
      const user = await userService.findAllUser();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const existingUser = await userService.findUserById(req.params.id);
      if (!existingUser) {
        res.status(404).json({ message: "User not found" });
      }
      const user = await userService.updateUser(
        req.params.id,
        existingUser.userName,
        req.body
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const existingUser = await userService.findUserById(req.params.id);
      if (!existingUser) {
        res.status(404).json({ message: "User not found" });
      }
      const deletedUser = await userService.deleteUser(req.params.id);
      const collection = await userService.findAllUser();
      res.status(200).json({
        message: "User deleted successfully",
        deletedUser,
        collection,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new userController();