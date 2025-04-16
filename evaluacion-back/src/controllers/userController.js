const { resgiterUser, loginUser } = require("../services/userManage");
const createUserValidators = require('../validations/userValidator');
const jwt = require('jsonwebtoken');
const secretKey = 'estoesunaclavesecretaquenadiesabrajamas'

const registerController = {
    resgiterUser: [
        ...createUserValidators,
        async (request, response) => {
            try {
                const {
                    name,
                    mail,
                    pass,
                    role,
                    weight,
                    height,
                    activity
                } = request.body;
                const photo = request.file;
                const data = await resgiterUser(
                    name,
                    mail,
                    pass,
                    role,
                    photo,
                    weight,
                    height,
                    activity
                );

                return response.status(201).json(data);
            } catch (e) {
                console.error('Error en registro:', error);

                if (error.code === 11000) {
                    return res.status(409).json({ error: 'Ya existe un usuario con ese nombre.' });
                }
        
                return res.status(500).json({ error: 'Error interno al registrar usuario.' });            }
        },
    ],
    loginUser: [
        async (req, res) => {
            try {
                const { name, pass, role } = req.body;

                const data = await loginUser(name, pass);
                if (!data) return res.status(401).json({ error: 'Credenciales inválidas' });

                const token = jwt.sign({ userId: data.id, role: role }, secretKey, { expiresIn: '1h' });
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'Lax',
                    maxAge: 3600000,
                    path: '/'
                });
                console.log('Cookies metidas');

                res.status(200).json({
                    message: 'Login exitoso',
                    user: data
                });

            } catch (e) {
                console.log("Error al login", e);
                res.status(500).json({ error: 'Error interno del servidor' }); // Añadir manejo de error
            }
        }
    ]

};

module.exports = registerController;