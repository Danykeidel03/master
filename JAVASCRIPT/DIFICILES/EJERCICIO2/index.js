let numerosDecimales = [1.23244, 2.23423, 3.423423, 4.657657]

function redondeo(numeros){
    let newArray = []
    numeros.forEach(num => {
        numeroFinal = Number(num.toFixed(3))
        if(typeof numeroFinal === 'number'){
            newArray.push(numeroFinal)
        }else{
            console.log('no es un numero')
        }
    })
    return newArray
}

console.log(redondeo(numerosDecimales))