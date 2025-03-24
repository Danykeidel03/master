const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')


//GET
router.get('/', (request, response) => {
    response.status(200).json({
        success: 'OK',
        users: usuarios
      });
})

//GET
router.get('/new' , userController.createUser)


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

router.get('/search' , userController.searchUser)

module.exports = router;