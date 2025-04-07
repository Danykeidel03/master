const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
const cors = require('cors') 
const helmet = require('helmet')
//proteccion con limite de peticiones por ip
const rateLimit = require('express-rate-limit')

//const cookieParser = require('cookie-parser');
//const jwt = require('jsonwebtoken'); este va en un controller

//Proteccion contra consultas no swl maliciosas
const mongoSanitize = require('express-mongo-sanitize')

//Parsear de forma automatica en JSON
app.use(
    cors({
      origin: 'http://localhost:8888',
      credentials: true,
    })
  );
app.use(express.json()) 
app.use(helmet())
app.use(mongoSanitize())
app.use(cookieParser()); // Sin necesidad de clave secreta a menos que uses cookies firmadas

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Demasiadas peticiones desde esta ip'
});

//toda mi api queda protegida de muchas peticiones recurrentes y excesivas
app.use('/', apiLimiter)


app.use('/users',(req, res) => {
    res.send('Respuesta final')
})

module.exports = app