const Post = require('../models/post');

const createPost = async(req, res) => {
    let data;
    try {
        data = Post.createPost(req.body);
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json({"error":error})
    }
};

const posts = {
    createPost
};

module.exports = posts