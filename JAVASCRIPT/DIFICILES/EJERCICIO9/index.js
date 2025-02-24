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

function sacarNumbers(array){
    let newArray = []
    array.forEach(element => {
        if(!isNaN(element)){
            newArray.push(element)
        }
    });
    return newArray
}

console.log(sacarNumbers(miArray))