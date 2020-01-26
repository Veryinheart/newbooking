const express = require('express');

const Router = express.Router();

const User = require('../model/userSchema');

Router.get('/login', (req, res) => {

  res.send(
    `I received your POST request. This is what you sent me:AAA`,
  );
});

Router.post('/signup', (req, res) => {
  console.log(req.body);
  // console.log('object')
})

Router.post('./api/user', (req, res) => {
  console.log(req.body);
})


module.exports = Router;