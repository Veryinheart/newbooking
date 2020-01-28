const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const posts = require('./router/posts');
const auth = require('./router/auth');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/posts',posts);
app.use('/api/user',auth);
// app.post('/posts/signup', (req, res) => {
//   console.log(req.body);
// })

// app.get('/api/hello', (req, res) => {
//   console.log(req.body)
//   res.send({ express: 'Hello From Express' });
// });



//connect to database 

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB')
);
  






app.listen(port, () => console.log(`Listening on port ${port}`));