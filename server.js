const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

//Registering the Mongoose db adapter for AdminBro.
//This allows AdminBro to manage mongoose resources. 

//DB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});
mongoose.connection.once('open', () => {
  console.log('db is connected');
}).on('error', () => {
  console.log('Error', err);
});


app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});

app.get('/',(req,res) =>{
  res.send('hello');
});