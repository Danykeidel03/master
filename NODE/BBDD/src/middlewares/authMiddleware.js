const secretKey = 'prueba'
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // 1. Obtener token de las cookies
    const token = req.cookies.token;

    // 2. Si no hay token, denegar acceso
    if (!token) return res.status(401).json({ error: 'Acceso no autorizado' });

    // 3. Verificar token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido o expirado' });
        }
        // 4. Añadir datos del usuario al request
        req.user = decoded;
        next();
    });
};