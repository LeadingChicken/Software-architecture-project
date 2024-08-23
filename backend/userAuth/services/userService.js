const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userRepository = require('../repositories/userRepository');

const SECRET = process.env.secret;

class UserService {
    async signUp(userName, password, isAdmin) {
        const existingUser = await userRepository.findByUserName(userName);
        if(existingUser) {
            throw new Error ('User already exists!');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        return await userRepository.createUser({ userName, password: hashedPassword, isAdmin });
    }

    async logIn(userName, password, isAdmin) {
        const user = await userRepository.findByUserName(userName);
        if(!user || user.isAdmin != isAdmin) {
            throw new Error ('User not found!');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            throw new Error ('Invalid credentials!');
        }
        const token = jwt.sign({ userID: user._id }, SECRET, { expiresIn: '1h' });
        return { token };
    }
}

module.exports = new UserService();