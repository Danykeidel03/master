const express = require('express')
const router = express.Router();

//POST
router.get('/users', (request, response) => {
    const {edad} = request.body
    response.status(200).json({success: 'OK', mensaje: `Hola ,estos so los users con ${edad} años de edad`})
    response.end()
})

//GET
router.get('/users/new' , (request, response) => {
    const {nombre,edad,mail} = request.body
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}, mail ${mail} y rol de ${rol}`})
})


//GET
router.get('/users/:id/porfile' , (request, response) => {
    const {id} = request.body
    response.status(200).json({success: 'OK', mensaje: `userid = ${id}`})
})

//POST
router.post('/users' , (request, response) => {
    const {nombre, edad, mail} = request.body
    console.log(nombre, edad, mail)
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}, mail ${mail}`})
    response.end()
})

//GET
router.put('/users/:id' , (request, response) => {
    const {id} = request.body
    response.status(200).json({success: 'OK', mensaje: `userid = ${id}`})
})

router.delete('/users/:id' , (request, response) => {
    const {id} = request.body
    response.status(200).json({success: 'OK', mensaje: `userid = ${id}`})
})


router.get('/users/:id/post/:postid' , (request, response) => {
    const {id} = request.body
    response.status(200).json({success: 'OK', mensaje: `userid = ${id}`})
})

router.get('/users/search' , (request, response) => {
    const {id} = request.body
    response.status(200).json({success: 'OK', mensaje: `userid = ${id}`})
})

module.exports = router;