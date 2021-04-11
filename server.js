const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const path = require("path");
const blogPostsRoutes = require("./routes/blogPosts");
const contactFormRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5001;

//DB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, //use Mongoose's new string parser and avoid deprecation warning of old url parser.
  useUnifiedTopology: true, //use Monggose's new topology engine and avoid deprecation warning of old topology engine.
});
mongoose.connection
  .once("open", () => {
    console.log("db is connected");
  })
  .on("error", () => {
    console.log("Error", err);
  });

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});

//Data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve('./dist','index.html'));
});

app.get("/home", (req, res) => {
  res.sendFile(path.resolve('./dist','index.html'));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve('./dist','index.html'));
});

app.get("/skills", (req, res) => {
  res.sendFile(path.resolve('./dist','index.html'));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.resolve('./dist','index.html'));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.resolve('./dist','index.html'));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve('./dist','index.html'));
});

app.get("/blogpost/*", (req, res) => {
  res.redirect('/');
});

// Middleware
app.use("/api/blogposts", blogPostsRoutes);
app.use("/api/contact", contactFormRoutes);
