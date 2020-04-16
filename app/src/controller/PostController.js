const postService = require('../service/PostService')
const Post = require('../model/Post')

exports.getAllPosts = (req, res) => {
    postService.findAll(res)
}

exports.addPost = (req, res) => {
    postService.addPost(new Post(req.body))
    res.send('created')
}