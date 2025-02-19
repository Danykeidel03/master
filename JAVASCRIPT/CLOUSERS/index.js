// METODO SCOPE
// es el area donde tienes acceso a una variable o una funcion

function crearContador(){
  let contador = 0;

  return function(){
    contador++;
    console.log(contador)
  }

}

const incrementar = crearContador()
incrementar();


// ES COMO UNA PRIVATE EN PHP Y ACCEDES DESDE OTRA CLASE CON LOS GET Y SET

function persona(nombre){
  return {
    obtenerNombre: function(){
      return nombre
    },
    cambiarNombre: function(nombreDistinto){
      nombre = nombreDistinto
    }
  }
}

let objPersona = persona('Daniel')
console.log(objPersona.obtenerNombre())
objPersona.cambiarNombre('Pablo')
console.log(objPersona.obtenerNombre())