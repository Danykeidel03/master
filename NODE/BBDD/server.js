const app = require('./src/app');
const connectBD = require('./src/config/database');

(async () => {
    try {
        await connectBD();
        app.listen(3000, () => {
            console.log('Servidor escuchando en el puerto 3000');
        });
    } catch (e) {
        console.error('No se ha podido levantar el servidor:', e);
    }
})();
