const express = require('express')
const router = express.Router();

//POST
router.post('/', (request, response) => {
    const {nombre, edad, mail} = request.body
    console.log(nombre, edad, mail)
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}, mail ${mail}`})
    response.end()
})

//GET
router.post('/delete' , (request, response) => {
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}, mail ${mail}`})
})

//POST
router.post('/create' , (request, response) => {
    response.status(200).json({success: 'OK', mensaje: `Hola ${nombre}, edad ${edad}, mail ${mail}`})
})


module.exports = router;