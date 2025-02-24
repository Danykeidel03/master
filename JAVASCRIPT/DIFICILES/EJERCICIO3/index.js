let numeros = [1.23244, 2.23423, 3.423423, 4.657657, 4, 273847239847239847, 2]

function exponencial (numeros){
    let arrayFinal = []
    numeros.forEach(num => {
        if (num < 0){
            console.log(`El numero ${num} es negativo`)
        }else{
            arrayFinal.push(num.toExponential(4))
        }
    })
    return arrayFinal
}

console.log(exponencial(numeros))
