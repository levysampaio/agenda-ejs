const Login = require('../models/loginModel')
/*
exports.inicio = (req,res) =>{
   res.render('index')
}
*/
exports.index = (req,res,next) => {
    res.render('register')
    next()
} 

exports.register = async (req,res) => {
    try{
        const login = new Login(req.body)
        await login.register()

        if(login.errors.length > 0){
            req.flash('errors', login.errors)
            req.session.save(function(){
                res.redirect('/register/index')
            })
            return;
        }

        req.flash('success', 'Usuário cadastrado com sucesso')
        req.session.save(function(){
                res.redirect('/register/index')
        })
        return;
          
    }catch (e){
        console.log(e)
        res.render('404')
    }
} 

