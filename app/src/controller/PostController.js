exports.getAllPosts = (req, res) => {
    res.json(
        {
            "posts": [
                { "title": "1", "likes": 230 },
                { "title": "2", "likes": 130 }

            ]
        }
    )
}