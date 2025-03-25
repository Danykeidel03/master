//AQUI VAN EL SCHEMA DE USUSARIO
const mongose = require('mongoose')

const ususarioSchema = new mongose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
        unique: true,
    }
})


const Usuario = mongose.model('Usuario', ususarioSchema)

module.exports = Usuario