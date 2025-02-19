// ejercicio 1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

function multiplicar() {
    arrayFinal = []
    const array = numeros.map((valor, index) => index % 2 === 0 ? valor * 2 : valor * 3)
    array.forEach(element => {
        if (element < 10) {
            arrayFinal.push(element)
        } else {
            arrayFinal.push(element - 5)
        }
    });
    return arrayFinal
}

console.log(multiplicar())



// ejercicio 2

obj = {
    a: 4,
    b: 10
}

function calculo2() {
    obj.b -= obj.a
    obj.a = obj.a * 3;
    obj.b = obj.b / 2;
    return obj
}

console.log(calculo2())

// ejercicio 3

inventario = [{
    nombre: 'lampara',
    precio: 10
},
{
    nombre: 'coche',
    precio: 35000
},
{
    nombre: 'telefono',
    precio: 30
},
{
    nombre: 'rueda',
    precio: 12
}]


function calculo3() {
    let newArray = [];
    inventario.forEach(element => {
        if (element.precio < 20) {
            newArray.push({ nombre: element.nombre, precio: element.precio + (element.precio * 0.15) })
        } else if (element.precio >= 50) {
            newArray.push({ nombre: element.nombre, precio: element.precio - (element.precio * 0.10) })
        } else {
            newArray.push({ nombre: element.nombre, precio: element.precio })
        }
    });
    return newArray;
}
console.log(calculo3())



// ejercicio 4

arrObj = [
    {
        nombre: 'Daniel',
        edad: 20,
        activo: true
    },
    {
        nombre: 'Pedro',
        edad: 27,
        activo: false
    },
    {
        nombre: 'Jose',
        edad: 12,
        activo: false
    },
    {
        nombre: 'Tino',
        edad: 33,
        activo: true
    }
]

function calculo4(){
    return arrObj.filter(alumno => alumno.edad > 18 && alumno.activo === true)
}

console.log(calculo4())


// ejercicio 5

let contraseña = 'Prueba.123'

function validarPass(pass){
    if(pass.length > 7 && !pass.includes(' ') && (/[A-Z]/.test(pass) && /\d/.test(pass))){
        return true
    }else{
        return false
    }
}

console.log(validarPass(contraseña))



// ejercicio 6

const numero = 5;

function calculo6(numero){
    if(numero > 0){
        return 'Positivo'
    }else if (numero < 0){
        return 'Negativo'
    }else{
        return 'Cero'
    }
}

console.log(calculo6(numero))



// ejercicio 7

let contador = {
    valor: 6
}

function calculo7(objeto){
    if(objeto.valor % 2 === 0){
        objeto.valor++
        return objeto.valor
    }else{
        objeto.valor--
        return objeto.valor
    }
}

console.log(calculo7(contador))


// ejercicio 8

const numero2 = 6

function calculo8(numero){
    if(numero % 2 === 0){
        return 1
    }else{
        return 0
    }
}

console.log(calculo8(numero2))

// ejercicio 9

function calculo9(numero){
    let n1 = numero << 1
    let n2 = numero >> 1
    return [n1, n2]
}

console.log(calculo9(6))

// ejercicio 10

