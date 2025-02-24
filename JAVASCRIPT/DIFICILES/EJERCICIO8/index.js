function numeroRandom(qty, max, min){
    let newArray = []
    for(i = 0; i <= qty; i++){
        newArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return newArray
}

console.log(numeroRandom(5,100,10))