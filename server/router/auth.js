const express = require('express');
const Router = express.Router();
const User = require('../model/userSchema');

Router.post('/signup', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
    });
    try {
        const savedUser = await user.save();
    } catch (error) {
        res.status(400).send(err)
    }
})

module.exports = Router;