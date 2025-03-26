// IMPORTACION DE SERVICIOS

const {getUsers, insertUser} = require('../services/userServices')
const createUserValidators = require('../validations/userValidator');

const userController = {
    getUserController: [

        async (req, response) => {
            try {
                const data = await getUsers()
                response.status(200).json(data)
            }catch(e){
                console.log('Error al pillar usuario de BBDD', e);
            }
        }
    ],

    createUser: [
        ...createUserValidators,
        async (request, response) => {
            try {
                const {nombre,mail} = request.body
                const data = await insertUser(nombre,mail)
                response.status(200).json(data)
            }catch(e){
                console.log('Error al pillar usuario de BBDD', e);
            }
        }
    ],
    searchUser:[
        (request,response) => {
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
        }
    ]
    
}

module.exports = userController;