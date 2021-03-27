const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
const BlogPost = require('./models/blogPost.js');
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

//Defining options for AdminBro user and blogpost resources
//Hiding the encrypted password, so you cannot see this from Admin portal.
//And adding a new virtual password property that is only shown on edit page.
const userResourceOptions = {
  properties: {
    encryptedPassword : {
      isVisible: false
    },
    password: { 
      type: 'string',
      isVisible: {
        list: false, edit: true, filter: false, show: false
      }
    }
  },
  actions: {
    new: {
      before: async (request) => {
        if(request.payload.password) {
          request.payload = {
            ...request.payload,
            encryptedPassword: await bcrypt.hash(request.payload.password, 10),
            password: undefined
          }
        }
        return request;
      }
    }
  }
};

//Setting up blogpost title & body properties to be a quill editor instances.
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
    },
    title: {
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
    { resource: User, options: userResourceOptions },
    { resource: BlogPost, options: blogPostResourceOptions }
  ]
});

//Creating and using router that will handle all AdminBro routes.
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({email});
    if(user) {
      const matched = await bcrypt.compare(password, user.encryptedPassword);
      if(matched){
        return user;
      }
    }
    return false;
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie' //temporary 
});
app.use(adminBro.options.rootPath, router);

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});