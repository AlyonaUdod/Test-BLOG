'use strict'

const express = require('express');
const router = express.Router();
const ctrlPosts = require('./controllerPosts');

router.get('/', ctrlPosts.getPosts)

router.get('/:id', ctrlPosts.getSinglePost);

router.post('/', ctrlPosts.postPost);

router.post('/:id/comments', ctrlPosts.postComment);

router.delete('/:id', ctrlPosts.deletePost);

router.put('/:id', ctrlPosts.updatePost);

module.exports = router;
