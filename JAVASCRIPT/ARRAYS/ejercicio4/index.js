function contarTipos(array){
    let arrayTipos = []
    let int = 0
    let string = 0
    array.forEach(element => {
        let type = typeof element
        if(arrayTipos[type]){
            arrayTipos[type]++
        }else{
            arrayTipos[type] = 1
        }
    });
    console.log(arrayTipos)
}

contarTipos([1, "hola", true, 42, false, "mundo", null, undefined]);