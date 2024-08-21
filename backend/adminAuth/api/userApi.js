const express = require('express');
const userService = require('../services/userService');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { userName, password } = req.body;
    try {
        const newUser = await userService.signUp(userName, password);
        res.status(201).json( { message: 'User created successfully!', user: newUser });
    }
    catch(error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    try {
        const token = await userService.logIn(userName, password);
        res.status(200).json(token);
    }
    catch(error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;