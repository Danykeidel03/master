const numerosEnDistintasBases = [
    "1010",    // Binario (10 en decimal)
    "12",      // Octal (10 en decimal)
    "10",      // Decimal (10 en decimal)
    "A"        // Hexadecimal (10 en decimal)
];

function returnDecimales(array){
    let newArray = [];
    array.forEach(element => {
        newArray.push(parseInt(element,10))
    });
    return newArray
}

console.log(returnDecimales(numerosEnDistintasBases));