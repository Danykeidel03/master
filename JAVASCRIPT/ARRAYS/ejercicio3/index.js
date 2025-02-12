function contarTipos(array){
    let arrayPalabras = []
    array.forEach(el => {
        if(el.split('').length > 5){
            arrayPalabras.push(el);
        }
    })
    console.log(arrayPalabras)
}

contarTipos(["elefante", "águila", "cielo", "oso", "universo"]);