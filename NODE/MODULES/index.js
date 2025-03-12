const { suma, resta, division, multiplicacion } = require('./calc');

console.log(suma(2, 3))
console.log(resta(2, 3))
console.log(multiplicacion(2, 3))
console.log(division(2, 3))

// npm uninstall jest
// npm update
// npm install express
// npm i



const http = require('http')
const server = http.createServer((req, res) => {
    res.writable(200, { 'Content-Type': 'text/plain' })
    res.end('Hola mundo!');
})
server.listen(3000, () => console.log('Puerto 3000'))

const os = require('os')
console.log(`Sistema operativo: ${os.platform()}, CPUs: ${os.cpus().length}`);

//MODULO PROCESS

console.log(`Id del proceso: ${process.id}`);
console.log(`Argumentos: ${process.argv}`);

//MODULO REDLINE (pregunta por consola)

const redline = require('readline')
const rl = redline.createInterface({input: process.stdin, output: process.stdout})
rl.question('Como te llamas?', (nombre) => {
    console.log(`Hola, ${nombre}`);
    rl.close()
})