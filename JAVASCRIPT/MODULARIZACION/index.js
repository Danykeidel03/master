//import * as Calculadora from  './calculadora.js' ;

//const {suma:funcionSuma, pi} = require('./calculadora.js')

//const num1 = 55;
//const num2 = 66;

//console.log(funcionSuma(num1, num2))
//console.log(pi)


//DESTRUCTURING

const coche = {
  marca: 'bmw',
  modelo: 'x3',
  color: 'negro',
  fabricacion: 2025
}

const numeros = [3,6,5,4,3,1]

const {marca: marca, modelo: modelo} = coche

console.log(marca)
console.log(modelo)

const [a, b, c] = numeros
console.log(a)

const [primero, , tercero] = numeros
console.log(tercero)


const [, , ...resto] = numeros
console.log(resto)