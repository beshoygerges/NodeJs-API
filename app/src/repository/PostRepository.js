const Post = require('../model/Post')

exports.save = (post) => {

    post.save(function (err) {
        if (err) return handleError(err);
        // saved!
        console.log('saved')
    });
}

exports.findAll = (res) => {

    Post.find({}, function (err, posts) {
        if (err) {
            console.log(err);
        } else {
            res.json(posts)
        }
    });


}
