const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogPostSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ name: String, email: String, commentBody: String, commentDate: String }],
  date: { type: Date, default: Date.now },
  likes: Number
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;