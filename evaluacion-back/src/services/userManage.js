const User = require('../models/User')
const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');
const uploadDir = path.join(__dirname, '../../uploads');

async function resgiterUser(name, mail, pass, role, photo, weight, height, activity) {
    try {
        if(!photo || !photo.originalname || !photo.buffer){
            return ('Foto no valida')
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pass, salt);

        const photoName = photo.originalname;
        const filePath = path.join(uploadDir, photoName)

        //Verifico que existe el directorio, si no, lo creo
        await fs.mkdir(uploadDir, { recursive: true })
        await fs.writeFile(filePath, photo.buffer)

        const user = new User({
            name,
            mail,
            pass: hashedPassword,
            role: role || 'ususario',
            photoName,
            weight,
            height,
            activity
        })

        const res = await user.save()
        console.log('usuario Registrado Con exito', res);
        return res;
    } catch (e) {
        console.log('Error:', e);
        return e
    }
}
async function loginUser(name, pass) {
    try {
        const user = await User.findOne({ name: name });
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