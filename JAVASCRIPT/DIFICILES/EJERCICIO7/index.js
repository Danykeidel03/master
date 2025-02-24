let numeros = [1, -1, 1.34324234, 24334654645, -5.656756756, 103.36456456, 3.5, 4.5]

function redondeoInteligente(numeros){
    let newArray = []
    numeros.forEach(num => {
        if(num - Math.trunc(num) === 0.5){
            Math.trunc(num) % 2 == 0 ? newArray.push(Math.floor(num)) : newArray.push((Math.trunc(num) + 1))
        }else{
            newArray.push(Math.round(num))
        }
    });
    return newArray
}

console.log(redondeoInteligente(numeros));

