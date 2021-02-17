const BlogPost = require('../models/blogPost');
const express = require('express');
const { json } = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// @desc get blog post by id
// @route GET /blogposts/:id
router.get('/:id', (req, res) => {
    const blogPostID = req.params.id;
    BlogPost.findById(blogPostID)
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({error: err});
        })
})

// @desc get all blog posts
// @route GET /blogposts
router.get('/', (req, res) => {
    BlogPost.find()
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({error: err});
        })
})

module.exports = router;