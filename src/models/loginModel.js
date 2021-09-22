const userModel = require('./schemaModel')
const bcryptjs = require('bcryptjs')

class Login{
    constructor(body){
        this.body = body
        this.errors = []
        this.user = null
    }

    async valida(){
        this.cleanUp()
        const email = await userModel.findOne({email: this.body.email})
        const password = await userModel.findOne({password: this.body.password}).where({email: email})
        console.log(this.body.password)
        if(!email){
            this.errors.push('Usuário não existe.')
        } 

        if(!bcryptjs.compareSync('ersdfsdfsf', password)){
            this.errors.push('Senha invalida.')
        }
    }

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = ''
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login