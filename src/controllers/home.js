const homeModel = require('../models/homeModel')
exports.inicio = (req,res) =>{
   res.render('index')
}

exports.login = (req,res) => {
    res.render('login')
} 