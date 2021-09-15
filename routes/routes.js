const express = require('express');
const route = express.Router();
const home = require('../src/controllers/home')


route.get('/', home.inicio)
route.get('/login', home.login)



module.exports = route;