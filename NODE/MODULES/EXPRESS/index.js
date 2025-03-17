const express = require('express')
const app = express()

//Parsear de forma automatica en JSON
app.use(express.json())

//GET
app.get('/api' , (request, response) => {
    const {nombre, edad} = request.query
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}`})
})

//GET
app.get('/api/:nombre' , (request, response) => {
    const {nombre} = request.query
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}`})
})

//POST
app.post('/registro' , (request, response) => {
    const {nombre, edad, mail} = request.body
    console.log(nombre, edad, mail)
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}, mail ${mail}`})
    response.end()
})

app.listen(3000, () => {
    console.log('puerto 3000')
})