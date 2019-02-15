'use strict'

const mongoose = require('mongoose');
const CommentSchema = require('./commentSchema');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, require: true },
    body: { type: String, require: true },
    comments: [CommentSchema],
});

const Post = mongoose.model('PostsCollection', postSchema);
module.exports = Post;