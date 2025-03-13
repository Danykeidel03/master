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
const rl = redline.createInterface({ input: process.stdin, output: process.stdout })
rl.question('Como te llamas?', (nombre) => {
    console.log(`Hola, ${nombre}`);
    rl.question('Edad?', (edad) => {
        console.log(`Tu edad es: ${edad}`);
        rl.close()
    })
})

//MODULO PARA LEER Y ESCIRBIR DICHEROS Y CARPETAS

const fs = require('fs');

//Asincrono
//fs.readFile(/** ruta del archivo, codificacion de lectura, callback */)

//Escribir archivo (SI NO EXISTE LO CREA)

fs.readFile('./prueba/escribir.txt', 'utf-8', (error, datos) => {
    if (error) {
        console.log(`Error: ${error}`);
        return;
    }
    console.log(datos);
})

fs.writeFile('./prueba/escribir.txt', 'Esto es una prueba vale ?', 'utf-8', (error, datos) => {
    if (error) {
        console.log(`Error: ${error}`);
        return;
    }
})

fs.readFile('./prueba/escribir.txt', 'utf-8', (error, datos) => {
    if (error) {
        console.log(`Error: ${error}`);
        return;
    }
    console.log(datos);
})

//ELIMINAR UN FICHERO

fs.unlink('./prueba/prueba.txt', error => {
    if(error) console.log(error);
    console.log('ELiminado');
})

//CREAR Y ELIMINAR DIRECTORIO Y LEER

fs.mkdir('./directorioPrueba', {recursive: true} , error => {
    if(error) console.log(error);
    console.log('Creado');
})

fs.rmdir('./directorioPrueba', error => {
    if(error) console.log(error);
    console.log('ELiminado');
})

fs.readdir('./prueba', (error, files) => {
    if(error) console.log(error);
    console.log(files);
})

//sacar info de archivos

fs.stat('./prueba/escribir.txt', (error, datos) => {
    if (error) {
        console.log(`Error: ${error}`);
        return;
    }
    console.log(datos);
})

//Copiar Ficheros

fs.copyFile('./prueba/escribir.txt', './prueba/copiado/escribir.txt', (error, datos) => {
    if (error) {
        console.log(`Error: ${error}`);
        return;
    }
    console.log(datos);
})