const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userRepository = require("../repositories/userRepository");

const SECRET = process.env.secret;

class UserService {
  // async signUp(userName, password, isAdmin) {
  //   const existingUser = await userRepository.findByUserName(userName);
  //   if (existingUser) {
  //     throw new Error("User already exists!");
  //   }
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   return await userRepository.createUser({
  //     userName,
  //     password: hashedPassword,
  //     isAdmin,
  //   });
  // }

  // async logIn(userName, password, isAdmin) {
  //     const user = await userRepository.findByUserName(userName);
  //     if(!user || user.isAdmin != isAdmin) {
  //         throw new Error ('User not found!');
  //     }
  //     const isMatch = await bcrypt.compare(password, user.password);
  //     if(!isMatch) {
  //         throw new Error ('Invalid credentials!');
  //     }
  //     const token = jwt.sign({ userID: user._id }, SECRET, { expiresIn: '1h' });
  //     return { token };
  // }

  async logIn(userName, password, isAdmin) {
    const user = await userRepository.findByUserName(userName);
    console.log(`username: ${userName}, password: ${password}`);
    if (!user) {
      throw new Error("User not found!");
    }
    const isMatch = password === user.password;
    //const isMatch = password === user.password;
    console.log(`userpassword: ${user.password}, password: ${password}`);
    console.log(isMatch);
    if (!isMatch) {
      throw new Error("Invalid credentials!");
    }
    const token = jwt.sign({ userID: user._id }, SECRET, { expiresIn: "1h" });
    return { token };
  }

  async signUp(userName, password, email, phoneNumber, fullName, isAdmin) {
    const existingUser = await userRepository.findByUserName(userName);
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
}

module.exports = new UserService();
