// ES COMO UNA PRIVATE EN PHP Y ACCEDES DESDE OTRA CLASE CON LOS GET Y SET

function persona(nombre) {
  return {
    obtenerNombre: function () {
      return nombre
    },
    cambiarNombre: function (nombreDistinto) {
      nombre = nombreDistinto
    }
  }
}

let objPersona = persona('Daniel')
//console.log(objPersona.obtenerNombre())
objPersona.cambiarNombre('Pablo')
//console.log(objPersona.obtenerNombre())

// ejercicio 1 y ejercicio 6

function contador() {

  let sumatorio = 0
  return {
    sumar: function () {
      sumatorio++
      return sumatorio
    },
    reiniciar: function () {
      sumatorio = 0
      return sumatorio
    }
  }
}

let contadorIncrementado = contador()
console.log(contadorIncrementado.sumar())
console.log(contadorIncrementado.sumar())
console.log(contadorIncrementado.reiniciar())




// ejercicio 2

function crearPrefijo(prefijo) {
  return function (nombre) {
    return prefijo + nombre
  }
}

let prefijoDaniel = crearPrefijo('Daniel_')
console.log(prefijoDaniel('Garcia'))

// ejercicio 3

function crearCuentaBancaria(saldoActual) {
  return {
    depositar: function (sumar) {
      saldoActual += sumar
    },
    retirar: function (restar) {
      saldoActual -= restar
    },
    saldo: function () {
      return saldoActual
    },
  }
}

let cuentaBancaria = crearCuentaBancaria(1000)
cuentaBancaria.depositar(500)
cuentaBancaria.retirar(200)
console.log(cuentaBancaria.saldo())



// ejercicio 4

function crearTemporizador(segundos) {
  return function contar() {
    segundos--
    return segundos
  }
}

let temporizador = crearTemporizador(10)
console.log(temporizador())


// ejercicio 5

let id = 0
function crearGeneradorId() {
  return function () {
    id++
    return id
  }
}

let generadorId = crearGeneradorId()
console.log(generadorId())



// ejercicio 7

let mensajes = []
function crearLogger() {
  return function (mensaje) {
    mensajes.push(mensaje)
    return mensajes
  }
}


let logger = crearLogger()
console.log(logger('Hola'))
console.log(logger('Hola'))
console.log(logger('Hola'))
console.log(logger('Hola'))


// ejercicio 8

function crearSumaAcumulativa(){
  let sumatorio = 0
  return function(numero){
    sumatorio += numero
    return sumatorio
  }
}

let sumaAcumulativa = crearSumaAcumulativa()
console.log(sumaAcumulativa(5))
console.log(sumaAcumulativa(10))
console.log(sumaAcumulativa(15))


// ejercicio 9

let eventos = []
function crearManejadorEventos(){
  return {
    agregar: function(event){
      eventos.push(event)
    },
    remover: function(){
      eventos.reverse().pop()
    },
    limpiar: function(){
      eventos = []
    }
  }
}

let manejadorEventos = crearManejadorEventos()
manejadorEventos.agregar('click')
manejadorEventos.agregar('scroll')
manejadorEventos.agregar('click')
manejadorEventos.agregar('scroll')

console.log(eventos)
manejadorEventos.remover()
console.log(eventos)
manejadorEventos.limpiar()
console.log(eventos)

// ejercicio 10

function crearMultiplicador(n1){
  return function(n2){
    return n1 * n2
  }
}

let multiplicador = crearMultiplicador(5)
console.log(multiplicador(10))
console.log(multiplicador(20))
console.log(multiplicador(30))