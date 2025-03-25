//AQUI IRIA LO DE MONGOO (UPDATE, CREATE...)

const Usuario = require('../models/User')

async function insertUser(nombre, mail){
    try{
        const user = new Usuario({nombre,mail})
        const res = await user.save()
        console.log('User insertado', res);
    }catch(e){
        console.log('Error:', e);
    }
}

async function getUsers(){
    try{
        const users = await Usuario.find()
        console.log('Usuarios:', users);
    }catch(e){
        console.log('Error:', e);
    }
}


module.exports = {insertUser, getUsers}