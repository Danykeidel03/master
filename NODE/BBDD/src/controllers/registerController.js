const { resgiterUser, loginUser } = require("../services/registerUser");
const jwt = require('jsonwebtoken');
const secretKey = 'prueba'

const registerController = {
    resgiterUser: [
        async (request, response) => {
            try {
                const {
                    nombre,
                    pass
                } = request.body;
                const data = await resgiterUser(
                    nombre,
                    pass
                );
                response.status(201).json(data);
            } catch (e) {
                console.log("Error al pillar producto de BBDD", e);
            }
        },
    ],
    loginUser: [
        async (req, res) => {
            try {
                const { nombre, pass } = req.body;
    
                const data = await loginUser(nombre, pass);
                if (!data) return res.status(401).json({ error: 'Credenciales inválidas' });
    
                const token = jwt.sign({ userId: data.id }, secretKey, { expiresIn: '1h' });
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