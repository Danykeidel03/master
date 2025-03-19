const express = require('express')
const router = express.Router();

//GET
router.get('/', (request, response) => {
    const {idioma, tema} = request.query
    response.status(200).json({success: 'OK', mensaje: `Idioma: ${idioma}, tema: ${tema}`})
})

router.get('/about' , (request, response) => {
    response.status(200).json({success: 'OK', mensaje: about})
})

router.get('/contact' , (request, response) => {
    const {nombre, mail} = request.query
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, mail ${mail}`})
})


module.exports = router;