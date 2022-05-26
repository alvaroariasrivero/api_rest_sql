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

const getPost = async(req, res) => {
    let data;
    const email = req.params.email
    try {
        if(email){
            data = await Post.getPostsByEmail(email);
            res.status(200).json(data);
        }else{
            data = await Post.getAllPosts();
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(400).json({"error":error})
    }
}

const posts = {
    createPost,
    getPost
};

module.exports = posts