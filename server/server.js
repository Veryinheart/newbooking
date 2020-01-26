const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
require('dotenv/config');

const posts = require('./router/posts');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/posts',posts);
// app.post('/posts/signup', (req, res) => {
//   console.log(req.body);
// })

app.get('/api/hello', (req, res) => {
  console.log(req.body)
  res.send({ express: 'Hello From Express' });
});



//connect to database 

// mongoose.connect(process.env.DB_CONNECTION,
//   { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('connected to DB'));






app.listen(port, () => console.log(`Listening on port ${port}`));