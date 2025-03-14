const redline = require('readline')
const fs = require('fs');
const path = require('path');
let arrayTextos = [];
const rl = redline.createInterface({ input: process.stdin, output: process.stdout })

opcionesCarpetas()

function opcionesCarpetas() {
    rl.question('Accion: 1-Crear 1 archivo, 2-Crear Varios, 3-Leer Archivo ', (opcion) => {
        switch (parseInt(opcion)) {
            case 1:
                crearCarpeta(opcion)
                break;
            case 2:
                crearCarpeta(opcion)
                break;
            case 3:
                leerArchivo()
                break;
            default:
                console.log("Opcion no valida");
                break;
        }
    })
}

function leerArchivo() {
    const archivos = fs.readdirSync('./');
    console.log(archivos);
    rl.question('Que carpeta quieres abrir?: ', (nombreCarpeta) => {
        fs.readdir(`./${nombreCarpeta}`, (err, archivosSecundarios) => {
            if (err) { console.error('Error al leer el directorio', err); rl.close(); }
            else {
                console.log(archivosSecundarios);
                rl.question('Que archivo quieres leer?: ', (nombreArchivo) => {
                    fs.readFile(`./${nombreCarpeta}/${nombreArchivo}`, 'utf8', (err, data) => {
                        if (err) { console.error('Error al leer el archivo', err); rl.close(); }
                        else {
                            console.log(data);
                            rl.close();
                        }
                    });
                })
            }
        });
    })
}

function crearCarpeta(opcion) {
    rl.question('Dime el nombre de la carpeta: ', (nombreCarpeta) => {
        fs.mkdir(`./${nombreCarpeta}`, { recursive: true }, error => {
            if (error) console.log(error);
            console.log(`Creada la Carpeta ${nombreCarpeta}`);
            if (parseInt(opcion) === 1) {
                escribirTxt(nombreCarpeta, false)
            } else if (parseInt(opcion) === 2) {
                escribirTxt(nombreCarpeta, true)
            }
        })
    })
}

function escribirTxt(nombreCarpeta, opcion) {
    rl.question('Quieres escribir ? s/n: ', (decision) => {
        if (decision === 's') {
            rl.question('Que quieres escribir: ', (txt) => {
                arrayTextos.push(txt)
                escribirTxt(nombreCarpeta, opcion)
            })
        } else {
            hacerArchivo(nombreCarpeta, opcion)
        }
    })
}

function hacerArchivo(nombreCarpeta, opciones) {
    rl.question('Dime el nombre del archivo con extension: ', (nombreArchivo) => {
        if (nombreArchivo != '' || nombreCarpeta != '') {
            const ruta = path.join('./', nombreCarpeta, nombreArchivo)
            fs.writeFile(ruta, arrayTextos.join('\n'), 'utf-8', (error, datos) => {
                if (error) {
                    console.log(`Error: ${error}`);
                }
            })
            if (opciones) {
                rl.question('Quieres hacer otro?: s/n ', (respuesta) => {
                    if (respuesta === 's') {
                        arrayTextos = [];
                        escribirTxt(nombreCarpeta, true)
                    } else {
                        console.log('Finalizado');
                        rl.close()
                    }
                })
            } else {
                console.log('Finalizado');
                rl.close()
            }
        } else {
            console.log('nombre no valido');
            rl.close()
        }
    })
}