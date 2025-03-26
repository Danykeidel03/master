const express = require('express')
const app = express()
const userRoutes = require('./routes/userRouter')
const cors = require('cors') 
const nokMiddleware = require('./middlewares/nokMiddleware');
const nextMiddleware = require('./middlewares/nextMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const helmet = require('helmet')
//proteccion con limite de peticiones por ip
const rateLimit = require('express-rate-limit')

//Proteccion contra consultas no swl maliciosas
const mongoSanitize = require('express-mongo-sanitize')

//Parsear de forma automatica en JSON
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Demasiadas peticiones desde esta ip'
});

//toda mi api queda protegida de muchas peticiones recurrentes y excesivas
app.use('/', apiLimiter)

//Definimos enrutadores
app.use('/users', userRoutes)

app.use('/users',(req, res) => {
    res.send('Respuesta final')
})

app.use(errorMiddleware)
app.use(nokMiddleware)

module.exports = app