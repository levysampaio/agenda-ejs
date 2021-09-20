const User = require('../models/loginModel')

exports.index = (req,res,next) => {
    res.render('login')
    next()
}

exports.login = async (req,res) => {
    try{
        const user = new User(req.body)
        await user.valida()

        if(user.errors.length > 0){
            req.flash('errors', user.errors)
            req.session.save(function(){
                res.redirect('/login')
            })
            return;
        }

        req.flash('success', 'Usuário logado!')
        req.session.save(function(){
                res.redirect('/login')
        })
        return;
          
    }catch (e){
        console.log(e)
        res.render('404')
    }
} 
