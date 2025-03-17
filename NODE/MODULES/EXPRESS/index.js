const express = require('express')
const app = express()

//Parsear de forma automatica en JSON
app.use(express.json())


let users = []

app.get('/api' , (request, response) => {
    const {nombre, edad} = request.query
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}`})
})

app.get('/api/:nombre' , (request, response) => {
    const {nombre} = request.query
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}`})
})

app.post('/registro' , (request, response) => {
    const {nombre, edad, mail} = request.body
    console.log(nombre, edad, mail)
    response.status(200).json({success: 'OK', mensaje: `Usuario creado, Bienvenido ${nombre} con mail ${mail}`})
    users.push({nombre: nombre, edad: edad, mail: mail})
    response.end()
})

app.post('/actualizar' , (request, response) => {
    const {nombre} = request.body
    users.forEach(element => {
        if(element.nombre === nombre){
            element.mail === mail
        }
    });
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, hemos cambiado tu mail`})
    response.end()
})

app.post('/eliminar' , (request, response) => {
    const {nombre} = request.body
    users = users.filter(usuario = usuario.nombre != nombre);
    response.status(200).json({success: 'OK', mensaje: `Usuario eliminado`})
    response.end()
})

app.get('/users' , (request, response) => {
    response.status(200).json({success: 'OK', mensaje: `Bien hecho`, data: users})
})

app.listen(3000, () => {
    console.log('puerto 3000')
})