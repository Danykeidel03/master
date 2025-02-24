const valores = [
    42,                // Número primitivo
    new Number(3.14),  // Objeto Number
    0,                 // Número primitivo
    new Number(-10),   // Objeto Number
    7.5,               // Número primitivo
    new Number(100),   // Objeto Number
    -2,                // Número primitivo
];

function pasarPrimitivos(array){
    let newArray = []
    array.forEach(element => {
        newArray.push(element.valueOf())
    });
    return newArray
}

console.log(pasarPrimitivos(valores))

