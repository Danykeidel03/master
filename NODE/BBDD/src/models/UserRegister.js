//AQUI VAN EL SCHEMA DE USUSARIO
const mongose = require('mongoose')

const ususarioSchema = new mongose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
        unique: true,
    }
})


const UserRegister = mongose.model('UserRegister', ususarioSchema)

module.exports = UserRegister