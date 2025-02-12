function validarPropiedades(obj1, array1) {
    let keyClaves = Object.keys(obj1)
    let result = true

    for(let elements in array1){
      if (!keyClaves.includes(array1[elements])){result = false}
    }
    console.log(result)
}


validarPropiedades({ nombre: "Juan", edad: 30, ciudad: "Madrid" }, ["nombre", "edad"]);
// Resultado esperado: true

validarPropiedades({ nombre: "Juan", edad: 30 }, ["nombre", "ciudad"]);
// Resultado esperado: false
