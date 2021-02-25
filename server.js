const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const dotenv = require('dotenv').config();
const blogPostsRoutes = require('./routes/blogPosts');
//Models
const BlogPost = require('./models/blogPost');
const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 5000;

//Registering the Mongoose db adapter for AdminBro.
//This allows AdminBro to manage mongoose resources. 
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

//Setting up blogpost body to be a quill editor instance.
//Gives body a toolbar editor in the admin portal.
const blogPostResourceOptions = {
  properties: {
    body: {
      type: 'richtext',
      custom: {
        modules: {
          toolbar: [['bold', 'italic'], ['link', 'image']]
        }
      }
    }
  }
};

//Instantiating AdminBro and passing in defined resources and options.
const adminBro = new AdminBro({
  resources: [
    User,
    { resource: BlogPost, options: blogPostResourceOptions }
  ]
});

//Creating and using router that will handle all AdminBro routes.
const router = AdminBroExpress.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

app.use(bodyParser.json());
app.use('/blogposts', blogPostsRoutes);

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
})