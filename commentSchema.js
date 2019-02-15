'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: { type: String, require: true },
    body: { type: String, require: true },
});

module.exports = commentSchema;