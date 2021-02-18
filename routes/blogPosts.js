const BlogPost = require('../models/blogPost');
const express = require('express');
const { json } = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// @desc GET BLOG POST BY ID
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

// @desc GET ALL BLOG POSTS
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

// @desc ADD A NEW COMMENT TO BLOG POST
// @route PUT /blogposts/:id
router.put('/:id/comments', (req, res) => {
    const blogID = req.params.id;
    BlogPost.findByIdAndUpdate(blogID,
        {
            $push : {
                'comments': req.body
            }
        },
        {new: true}) //Changes default, so function returns updated doc - not original
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({error: err});
        })
})

// @desc UPDATE NUMBER OF LIKES ON BLOG POST
// @route PUT /blogpost/:id
router.put('/:id/likes', (req, res) => {
    const blogId = req.params.id;
    BlogPost.findByIdAndUpdate(blogId, 
        {
            $set: {
                'likes' : req.body.likes
            }
        },
        {new: true}) //Changes default, so function returns updated doc - not original
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err =>{
            res.status(500).json({error : err});
        })
})

module.exports = router;