const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const dotenv = require('dotenv').config();
const BlogPost = require('./models/blogPost');
const blogPostsRoutes = require('./routes/blogPosts');

const app = express();
const PORT = process.env.PORT || 5000;

//Registering the Mongoose db adapter for AdminBro
AdminBro.registerAdapter(AdminBroMongoose);

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

// Passing resources to AdminBro
const adminBroOptions = {
  resources: [BlogPost]
};
const adminBro = new AdminBro(adminBroOptions);
const router = AdminBroExpress.buildRouter(adminBro);

app.use(adminBro.options.rootPath, router);
app.use(bodyParser.json());
app.use('/blogposts', blogPostsRoutes);

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
})