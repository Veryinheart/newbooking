const express = require('express');
const Router = express.Router();
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('./validation');
const jwt = require('jsonwebtoken');

Router.post('/signup', async (req, res) => {


    //validate the data for singnup
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already used');

    //hash the password

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashPassword,
        email: req.body.email
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(err)
    }
});


Router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email or password is wrong');

    //check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    //create and assingn a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('access-token', token).send(token);


})

module.exports = Router;