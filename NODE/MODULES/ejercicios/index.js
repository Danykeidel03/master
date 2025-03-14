const redline = require('readline')
const fs = require('fs');
const path = require('path');
let arrayTextos = [];
const rl = redline.createInterface({ input: process.stdin, output: process.stdout })

crearCarpeta()

function crearCarpeta() {
    rl.question('Dime el nombre de la carpeta: ', (nombreCarpeta) => {
        fs.mkdir(`./${nombreCarpeta}`, { recursive: true }, error => {
            if (error) console.log(error);
            console.log(`Creada la Carpeta ${nombreCarpeta}`);
            escribirTxt(nombreCarpeta)
        })
    })
}

function escribirTxt(nombreCarpeta) {
    rl.question('Quieres escribir ? s/n: ', (decision) => {
        if (decision === 's') {
            rl.question('Que quieres escribir: ', (txt) => {
                arrayTextos.push(txt)
                escribirTxt(nombreCarpeta)
            })
        } else {
            hacerArchivo(nombreCarpeta)
        }
    })
}

function hacerArchivo(nombreCarpeta){
    rl.question('Dime el nombre del archivo con extension: ', (nombreArchivo) => {
        if(nombreArchivo != '' || nombreCarpeta != ''){
            const ruta = path.join('./', nombreCarpeta, nombreArchivo)
            fs.writeFile(ruta, arrayTextos.join('\n'), 'utf-8', (error, datos) => {
                if (error) {
                    console.log(`Error: ${error}`);
                }
                rl.close()
            })
        }else{
            console.log('nombre no valido');
            rl.close()
        }
    })
}