const http = require('http')
const WebSocket = require('ws')

//implementacion webSocket
const server = http.createServer();
const wss = new WebSocket.Server({ server })

//almacenar conexiones activas
const clientes = new Set()

//gestion del webSocket
wss.on('connection', ws => {
    //agregar la conexion a mi listado+
    clientes.add(ws)

    //manejo de los mensajes entrantes
    ws.on('message', msg => {
        const messageData = JSON.parse(msg)

        //enviar mensaje a los clientes conectados
        clientes.forEach(cliente => {
            cliente.send(JSON.stringify(messageData))
        })
    })
    //si cierra conexion se borra el listado dwe clientes
    ws.on('close', () => clientes.delete(ws))
})

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
