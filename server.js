const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const path = require("path");
const blogPostsRoutes = require("./routes/blogPosts");
const contactFormRoutes = require("./routes/contact");
const cors = require("cors");

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
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", 'GET, POST, PUT');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});
// Middleware
app.use("/api/blogposts", blogPostsRoutes);
app.use("/api/contact", contactFormRoutes);
