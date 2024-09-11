const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userRepository = require("../repositories/userRepository");

const SECRET = process.env.secret;

class UserService {
  async logIn(userName, password, isAdmin) {
    const user = await userRepository.findUserByName(userName);
    if (!user || isAdmin != user.isAdmin) {
      throw new Error("User not found!");
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials!");
    }
    const token = jwt.sign({ userID: user._id }, SECRET, { expiresIn: "1h" });
    return { token };
  }

  async signUp(userName, password, email, phoneNumber, fullName, isAdmin) {
    const existingUser = await userRepository.findUserByName(userName);
    if (existingUser) {
      throw new Error("User already exists!");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return await userRepository.createUser({
      userName,
      password: hashedPassword,
      email,
      phoneNumber,
      fullName,
      isAdmin,
    });
  }

  async createUser({
    userName,
    password,
    email,
    phoneNumber,
    fullName,
    isAdmin,
  }) {
    const existingUser = await userRepository.findUserByName(userName);
    if (existingUser) {
      throw new Error("User already exists!");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return await userRepository.createUser({
      userName,
      password: hashedPassword,
      email,
      phoneNumber,
      fullName,
      isAdmin
    });
  }

  async findUserById(userId) {
    return await userRepository.findUserById(userId);
  }

  async findAllUser() {
    return await userRepository.findAllUser();
  }

  async updateUser(userId, latestUserName, { userName, password, email, phoneNumber, fullName, isAdmin }) {
    if (latestUserName != userName) {
      const existingUser = await userRepository.findUserByName(userName);
      if (existingUser) {
        throw new Error('User name already exists');
      }
    }
    return await userRepository.updateUser(
      userId,
      { userName, password, email, phoneNumber, fullName, isAdmin }
    );
  }

  async deleteUser(userId) {
    return await userRepository.deleteUser(userId);
  }
}

module.exports = new UserService();