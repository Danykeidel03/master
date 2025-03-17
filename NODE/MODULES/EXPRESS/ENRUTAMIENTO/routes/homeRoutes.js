const express = require('express')
const router = express.Router();

//GET
router.get('/', (request, response) => {
    const {nombre, edad} = request.query
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}`})
})

router.get('/:nombre' , (request, response) => {
    const {nombre} = request.query
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}`})
})

router.get('/:newUser' , (request, response) => {
    const {nombre} = request.query
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}`})
})


module.exports = router;