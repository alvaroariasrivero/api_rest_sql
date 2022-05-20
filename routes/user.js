const routes = require('express').Router();
const userApi = require('../controllers/user');

routes.post('/signup', userApi.signUp);
routes.post('/login', userApi.loginUser);
routes.get('/logout/:email', userApi.logout);

module.exports = routes;