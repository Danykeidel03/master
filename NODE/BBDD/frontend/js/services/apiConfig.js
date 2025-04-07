/**
 * AQUI SE MANEJARAN LAS LLAMADAS
 */

import * as errorJs from "./errorService.js";

export async function doFetch(url, type, bodyLlamada){
    console.log(bodyLlamada)
    let options = {};
    if(bodyLlamada){
        options = {
            method: type,
            headers: {"Content-Type": "application/json"},
            body: bodyLlamada,
            credentials: 'include'
        };
    }else{
        options = {
            method: type,
            headers: {"Content-Type": "application/json"},
            credentials: 'include'
        }
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json()
        return result
    } catch (error) {
        errorJs.returnError(error,document.querySelector('.divListadoUsers'), document.querySelector('.main'))
        console.log('Ha habido un error en la peticion: ', error);
    }
}
