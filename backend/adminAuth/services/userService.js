const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userReposistory = require('../reposistories/userReposistory');

const SECRET = process.env.secret;

class UserService {
    async signUp(userName, password) {
        const existingUser = await userReposistory.findByUserName(userName);
        if(existingUser) {
            throw new Error ('User already exist!');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        return await userReposistory.createUser({ userName, password: hashedPassword});
    }

    async logIn(userName, password) {
        const user = await userReposistory.findByUserName(userName);
        if(!user || !user.isAdmin) {
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