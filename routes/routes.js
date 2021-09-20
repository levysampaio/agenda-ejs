const express = require('express');
const route = express.Router();
const register = require('../src/controllers/registerController');
const login = require('../src/controllers/loginController')
const home = require('../src/controllers/homeController');



route.get('/', home.index)
route.get('/login', login.index)
route.post('/login/login', login.login)
route.get('/register', register.index)
route.post('/register/register', register.register)




module.exports = route;