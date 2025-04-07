const messageDiv = document.querySelector('.chat-messages');
const messageInput = document.querySelector('#messageInput');
const messageButton = document.querySelector('.buttonSend');

const ws = new WebSocket('ws://localhost:3000');

const username = `Usuario: ${Math.floor(Math.random() * 1000)}`;

//conexion webscoket
ws.addEventListener('open', () => console.log('Conectado al websocket'))

//mensajes recibidos
ws.addEventListener('message', event => {
    const menssage = JSON.parse(event.data)  // guardamos el mensaje
    displayMessage(menssage)
})

//errores
ws.addEventListener('error', e => console.log(e))

//conexion cerrada
ws.addEventListener('close', () => console.log('conexion cerrada') )

//enviamos mensaje
messageButton.addEventListener('click', sendMessage)

function sendMessage(){
    const message = messageInput.value.trim();
    if(message) {
        const messageData = {
            username: username,
            message: message
        }

        //ENVIAMOS EL MENSAJE
        ws.send(JSON.stringify(messageData))
        messageInput.value = ''
    }
}


function displayMessage(mensaje){
    const messageElement = document.createElement('div')
    messageElement.className = `message ${mensaje.username === username ? 'enviado' : 'recibido'}`
    messageElement.innerHTML = `
        <strong>${mensaje.username}: </strong> ${mensaje.message}
    `
    messageDiv.appendChild(messageElement)
    messageDiv.scrollTop = messageDiv.scrollHeight
}