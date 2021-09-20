const User = require('../models/registerModel')

exports.index = (req,res,next) => {
    res.render('register')
    next()
} 

exports.register = async (req,res) => {
    try{
        const user = new User(req.body)
        await user.register()

        if(user.errors.length > 0){
            req.flash('errors', user.errors)
            req.session.save(function(){
                res.redirect('/register')
            })
            return;
        }

        req.flash('success', 'Usuário cadastrado com sucesso')
        req.session.save(function(){
                res.redirect('/register')
        })
        return;
          
    }catch (e){
        console.log(e)
        res.render('404')
    }
} 

