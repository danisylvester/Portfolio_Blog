const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const path = require('path');
const blogPostsRoutes = require('./routes/blogPosts');

const app = express();
const PORT = process.env.PORT || 5001;

//DB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, //to use Mongoose's new string parser and avoid deprecation warning of old url parser.
  useUnifiedTopology:true //to use Monggose's new topology engine and avoid deprecation warning of old topology engine.
});
mongoose.connection.once('open', () => {
  console.log('db is connected');
}).on('error', () => {
  console.log('Error', err);
});


app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});

//temporary
app.get('/',(req,res) =>{
  res.send('hello');
});

//MIDDLEWARE to change number of likes and add comments
app.use('/blogposts', blogPostsRoutes); 