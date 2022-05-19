const routes = require('express').Router();
const userApi = require('../controllers/user');

routes.post('/signup', userApi.signUp);

module.exports = routes;