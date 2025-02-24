const miArray = [
    42,                    // Número
    "Hola, mundo",         // String
    true,                  // Booleano
    null,                  // Null
    undefined,             // Undefined
    { nombre: "Juan" },    // Objeto
    [1, 2, 3],            // Array
    function () {          // Función
        return "Soy una función";
    },
    new Date(),            // Fecha
];

function number(array){
    let arrayNumeros = [];
    let noNumeros = []
    array.forEach(element => {
        if(Number(element)){
            arrayNumeros.push(element)
        }else{
            noNumeros.push(element)
        }
    });
    return {
        arrayNumeros,
        noNumeros
    }
}

console.log(number(miArray))