const routes = require('express').Router();
const postApi = require('../controllers/post');
const protectedRoutes = require('../middlewares/verifiedToken');

routes.post('/post', protectedRoutes, postApi.createPost);
routes.get('/post/:email?', postApi.getPost);

module.exports = routes