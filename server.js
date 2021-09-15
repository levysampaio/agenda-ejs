require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes/routes')
const path = require('path')
const helmet = require('helmet')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const csrf = require('csurf')
const middleware = require('./src/middlewares/middleware')
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectado a base de dados')
        app.emit('Ready')
    }).catch((e) => {console.log(e)})

app.use(express.urlencoded({extended: true})) // habilida envio de objeto urlenconded no body (req.body)

app.use(express.json())   // habilida envio de objeto JSON no body (req.body)

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: ' adent5ofe ertnfd0 ftjbvr5',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    }
  });

app.use(sessionOptions)

app.use(flash())

app.use(csrf())

app.use(helmet())


app.use(middleware)

app.use(routes)


app.set('views', path.resolve(__dirname, 'src', 'views'))

app.set('view engine', 'ejs')

app.on('Ready', () =>{
    app.listen(3000, () => {
        console.log('Server rodando na porta 3000')
        console.log('Acessar http://localhost:3000')
    })
})
