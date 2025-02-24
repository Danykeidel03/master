let numeros = [1, -1, 1.34324234, 24334654645, -5.656756756, 103.36456456]

function redondeoArriba(numeros){
    let newArray = [];
    numeros.forEach(element => {
        if(element != NaN){
            newArray.push(Math.ceil(element))
        }
    });
    return newArray
}

console.log(redondeoArriba(numeros));