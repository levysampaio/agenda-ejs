const express = require('express');
const route = express.Router();
const login = require('../src/controllers/loginController')


//route.get('/login', home.login)
//route.get('/', login.register)
route.get('/register/index', login.index)
route.post('/register/register', login.register)




module.exports = route;