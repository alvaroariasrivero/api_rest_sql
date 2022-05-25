const routes = require('express').Router();
const postApi = require('../controllers/post');

routes.post('/post', postApi.createPost);

module.exports = routes