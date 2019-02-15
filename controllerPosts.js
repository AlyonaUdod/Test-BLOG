'use strict'

const db = require('./postDb');

module.exports.getPosts = (req, res) => {
    db
    .getPostsFromDb()
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.getSinglePost = (req, res) => {
    db
    .getSinglePostFromDb(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.postPost = (req, res) => {
    db
    .postPostToDb(req)
    .then((data) => {
      res
        .status(201)
        .json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.postComment = (req, res) => {
  // console.log(req.body)
    db
    .postCommentToDb(req.params.id, req)
    // .then(data => console.log(data))
    .then((data) => {
      console.log(data)
      res
        .status(201)
        .json(data);
    })
    .catch((err) => {
      console.log(err)
      res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.updatePost = (req, res) => {
    db
    .updatePostInDb(req.params.id, req.body)
    .then((results) => {
      if (results) {
        res.json(results);
      } else {
        res
          .status(400)
          .json({err: 'Post not found'});
      }
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
}

module.exports.deletePost = (req, res) => {
  // console.log(req.params.id)
    db
    .deletePostFromDB(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res
        .status(400)
        .json({err: err.message});
    })
}

