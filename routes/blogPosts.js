const BlogPost = require("../models/blogPost");
const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// @desc GET BLOG POST BY ID
// @route GET /blogposts/:id
router.get("/:id", (req, res) => {
  const blogPostID = req.params.id;
  BlogPost.findById(blogPostID)
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// @desc GET ALL BLOG POSTS
// @route GET /blogposts
router.get("/", (req, res) => {
  console.log("here");
  BlogPost.find()
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// @desc ADD A NEW COMMENT TO BLOG POST
// @route PUT /blogposts/:id
router.put("/:id/comments", (req, res) => {
  const blogID = req.params.id;

  const newComment = {
    name: req.body.name,
    email: req.body.email,
    commentBody: req.body.commentBody,
    commentDate: req.body.commentDate,
  };

  BlogPost.findByIdAndUpdate(
    blogID,
    {
      $push: {
        comments: newComment,
      },
    },
    { new: true }
  ) //Changes default, so function returns updated doc - not original
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// @desc UPDATE NUMBER OF LIKES ON BLOG POST
// @route PUT /blogpost/:id
router.put("/:id/likes", (req, res) => {
  const blogId = req.params.id;
  const likesCount = req.body.newCount;
  console.log(`likesCount from backend: ${likesCount}`);
  BlogPost.findByIdAndUpdate(
    blogId,
    {
      $set: {
        likes: likesCount,
      },
    },
    { new: true }
  ) //Changes default, so function returns updated doc - not original
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
