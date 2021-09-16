const express = require('express');
const route = express.Router();
const home = require('../src/controllers/home')


route.get('/login', home.login)
route.get('/', home.inicio)
route.get('/register', home.register)




module.exports = route;