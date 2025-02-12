function contarTipos(array){
    let arrayTipos = []
    array.forEach(element => {
        console.log(typeof element)
    });
}

contarTipos([1, "hola", true, 42, false, "mundo", null, undefined]);