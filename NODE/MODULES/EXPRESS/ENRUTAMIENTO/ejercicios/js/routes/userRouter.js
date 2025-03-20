const express = require('express')
const router = express.Router();

const usuarios = [
    { nombre: "Juan Pérez", edad: 25, mail: "juanp@example.com", rol: "admin", id_user: 1 },
    { nombre: "María Gómez", edad: 30, mail: "mariag@example.com", rol: "editor", id_user: 2 },
    { nombre: "Carlos Rodríguez", edad: 28, mail: "carlosr@example.com", rol: "usuario", id_user: 3 },
    { nombre: "Ana López", edad: 22, mail: "analop@example.com", rol: "admin", id_user: 4 },
    { nombre: "Pedro Sánchez", edad: 35, mail: "pedros@example.com", rol: "editor", id_user: 5 },
    { nombre: "Laura Fernández", edad: 27, mail: "lauraf@example.com", rol: "usuario", id_user: 6 },
    { nombre: "Miguel Torres", edad: 33, mail: "miguelt@example.com", rol: "admin", id_user: 7 },
    { nombre: "Sofía Ramírez", edad: 29, mail: "sofiar@example.com", rol: "editor", id_user: 8 },
    { nombre: "David Herrera", edad: 31, mail: "davidh@example.com", rol: "usuario", id_user: 9 },
    { nombre: "Elena Cruz", edad: 26, mail: "elenac@example.com", rol: "admin", id_user: 10 }
];

//GET
router.get('/', (request, response) => {
    response.status(200).json({
        success: 'OK',
        users: usuarios
      });
})

//GET
router.get('/new' , (request, response) => {
    const {nombre,edad,mail} = request.query
    usuarios.push({nombre: nombre, edad: edad, mail: mail, rol: "admin", id_user: 11})
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}, mail ${mail}`})
})


//GET
router.get('/:id/porfile' , (request, response) => {
    const {id} = request.params
    verUser = usuarios.filter(usu => usu.id_user == id)
    response.status(200).json({success: 'OK', mensaje: verUser})
})

//POST
router.post('/user' , (request, response) => {
    const {nombre, edad, mail} = request.body
    usuarios.push({nombre: nombre, edad: edad, mail: mail, rol: "admin", id_user: 11})
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}, mail ${mail}`})
    response.end()
})

//GET
router.put('/:id' , (request, response) => {
    const {id} = request.params
    const {mail} = request.body
    console.log(id)
    console.log(mail)
    response.status(200).json({success: 'OK', mensaje: `userid = ${id}`})
})

router.delete('/:id' , (request, response) => {
    const {id} = request.params
    response.status(200).json({success: 'OK', mensaje: `userid = ${id}`})
})


router.get('/:id/post/:postid' , (request, response) => {
    const {id} = request.body
    response.status(200).json({success: 'OK', mensaje: `userid = ${id}`})
})

router.get('/search' , (request, response) => {
    const {nombre,edad,mail} = request.query
    let mensaje = ""
    if(nombre != ""){
        mensaje += `Nombre = ${nombre} `
    }
    if(edad != ""){
        mensaje += `Edad = ${edad} `
    }
    if(mail != ""){
        mensaje += `Mail = ${mail} `
    }
    response.status(200).json({success: 'OK', mensaje: mensaje})
})

module.exports = router;