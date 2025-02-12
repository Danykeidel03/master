//EJERCICIO 1

const numbers = [3, 7, 12, 5, 9, 24, 15];

console.log(
  numbers.map(function (numero) {
    return numero * 2;
  })
);

console.log(
  numbers.filter((numero) => numero%2 == 0 && numero > 20)
);


//ejercicio 2

const scores = [56, 89, 72, 45, 99, 38, 65];

console.log(
  scores.sort().reverse()
)

let newArray = scores.sort().reverse()
newArray.pop()
newArray.shift()
console.log(newArray)

//ejercicio 3

const fruits = ['apple', 'banana', 'cherry'];

fruits.push('grapes')
fruits.unshift('mango')

console.log(fruits)

fruits.pop()
fruits.shift()
fruits.shift()

console.log(fruits)