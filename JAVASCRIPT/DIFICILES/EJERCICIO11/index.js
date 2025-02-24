const numerosEnDistintasBases = [
    "10.5858",    // Binario (10 en decimal)
    "12.1BIPBPIYBPI",      // Octal (10 en decimal)
    "10.16879846384BIBUIB",
];

function convertirFloar(array){
    let newArray = []
    array.forEach(element => {
        newArray.push(parseFloat(element))
    });
    return newArray;
}

console.log(convertirFloar(numerosEnDistintasBases))