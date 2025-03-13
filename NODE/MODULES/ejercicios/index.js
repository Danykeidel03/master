const redline = require('readline')
const fs = require('fs');
let arrayTextos = [];
const rl = redline.createInterface({ input: process.stdin, output: process.stdout })


crearCarpeta()

function crearCarpeta(){
    rl.question('Dime el nombre de la carpeta: ', (nombreCarpeta) => {
        fs.mkdir(`./${nombreCarpeta}`, {recursive: true} , error => {
            if(error) console.log(error);
            console.log(`Creada la Carpeta ${nombreCarpeta}`);
            rl.question('Quieres escribir ? s/n: ', (decision) => {
                if(decision === 's'){
                    rl.question('Que quieres escribir: ', (txt) => {
                        arrayTextos.push(txt)
                        rl.question('Dime el nombre del archivo: ', (nombreArchivo) => {
                            fs.writeFile(`./${nombreCarpeta}/${nombreArchivo}`, arrayTextos.join('\n'), 'utf-8', (error, datos) => {
                                if (error) {
                                    console.log(`Error: ${error}`);
                                }
                                rl.close()
                            })
                        })
                    })
                }else{
                    false
                }
            })
        })
    })
}