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
        this.user = await userModel.findOne({email: this.body.email}) 

        console.log(this.user)
        console.log(this.user.password)
   
        if(!this.user){
            this.errors.push('Usuário não existe.')
        } 

        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
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