const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//DB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
mongoose.connection.once('open', () => {
    console.log('db is connected');
}).on('error', () => {
    console.log('Error', err);
})

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
})