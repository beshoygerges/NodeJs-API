const postRepository = require('../repository/PostRepository')

exports.addPost = (post) => {
    postRepository.save(post);
}

exports.findAll = (res) => {
    postRepository.findAll(res)
}