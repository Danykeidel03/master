const UserRegister = require('../models/UserRegister')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


async function resgiterUser(nombre, pass) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pass, salt);
        const user = new UserRegister({ nombre, pass: hashedPassword })
        const res = await user.save()
        console.log('User registrado', res);
        return res;
    } catch (e) {
        console.log('Error:', e);
    }
}
async function loginUser(nombre, pass) {
    try {
        const user = await UserRegister.findOne({ nombre: nombre });
        if (!user) {
            console.log('Usuario no encontrado');
            return null;
        }

        // Aquí deberías comparar la contraseña
        const isMatch = await bcrypt.compare(pass, user.pass);
        if (!isMatch) {
            console.log('Contraseña incorrecta');
            return null;
        }

        console.log('Usuario autenticado:', user);
        return user;
    } catch (e) {
        console.log('Error:', e);
    }
}


module.exports = { resgiterUser, loginUser };