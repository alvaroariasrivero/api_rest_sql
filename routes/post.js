const routes = require('express').Router();
const postApi = require('../controllers/post');

routes.post('/post', postApi.createPost);
routes.get('/post/:email?', postApi.getPost);

module.exports = routes