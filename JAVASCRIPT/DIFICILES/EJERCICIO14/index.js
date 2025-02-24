let arrayNumeros = []
function numerosRandom(){
    let numeroRandom = (Math.random() * 100)
    arrayNumeros.push({numeroOriginal: numeroRandom, numeroRedondeado: Math.round(numeroRandom)})
}

numerosRandom()
numerosRandom()
numerosRandom()
numerosRandom()
numerosRandom()
numerosRandom()
numerosRandom()
numerosRandom()
numerosRandom()
numerosRandom()
numerosRandom()
numerosRandom()
numerosRandom()
console.log(arrayNumeros)
