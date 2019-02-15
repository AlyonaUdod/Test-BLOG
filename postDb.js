'use strict'

const Post = require('./postSchema');
const Comment = require('./commentSchema')

module.exports.getPostsFromDb = function(){
    return Post.find({}, { title: 1, body: 1 })
}

module.exports.getSinglePostFromDb = function(id){
    return Post.findById(id)
}

module.exports.postPostToDb = function(req){
    const { title, body } = req.body;
    const newPost = new Post({
      title,
      body,
    });
    return newPost.save()
};

module.exports.postCommentToDb = function(id, req){
    Post.findById(id).exec()
    .then((post) => {
        post.comments.push(req.body)
        return post.save()
    })
    
};

module.exports.deletePostFromDB = function (id) {
    return Post.findByIdAndRemove(id);
}

module.exports.updatePostInDb = function(id, post) {
   return Post.findByIdAndUpdate(id, post);
}