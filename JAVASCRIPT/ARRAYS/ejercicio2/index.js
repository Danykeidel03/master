function invertirObjeto(array){
    let nuevaArray = []
    for (const key in array){
        let nuevaClave = array[key];
        nuevaArray[nuevaClave] = key;
    }
    console.log(nuevaArray);
}

invertirObjeto({ a: "uno", b: "dos", c: "tres" });