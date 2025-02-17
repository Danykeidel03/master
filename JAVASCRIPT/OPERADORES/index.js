//OPERADORES EXPLICACION

const tipoVariable = typeof 'string';
const instance = [2,3,6,5,7,8,9] instanceof new Array();

//OPERADOR TERNARIO

const edad = 11
const mayor = ''
mayor = edad >= 18 ? 'Mayor de edad' : 'Menor de edad'

//OPERADOR DE NULLISH COALESCING Y OPCIONALES

const mayorEdad = true

const autorizacion = mayorEdad ?? 'No es mayor de edad'; // contempla que no sea ni undefined ni null
autorizacion = mayorEdad || 'No esta autorizado'; // contempla que no sea false

const persona = {
    nombre: 'ana',
    edad: 22,
    hermano : {
        nombre: 'david',
        edad: 24
    }
}

// si no existe no hace nada, si no, la muestra

const hermanoEdad = persona.hermana?.edad;
