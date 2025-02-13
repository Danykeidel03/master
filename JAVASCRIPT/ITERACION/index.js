//EJERCICIO 1

const numbers = [3, 7, 12, 5, 9, 24, 15];

console.log(
  numbers.map(function (numero) {
    return numero * 2;
  })
);

console.log(
  numbers.filter((numero) => numero % 2 == 0 && numero > 20)
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

// ejercicio 4

const names = ['Alice', 'Bob', 'Charlie', 'David'];

console.log(names.reverse());

console.log(names.join('-'));

// ejercicio 5 SIN HACER
const words = ['cat', 'elephant', 'dog', 'giraffe', 'lion'];

console.log(`La palabra mas larga es = ${words.find(word => word.length)}`)


// ejercicio 6

const colors = ['red', 'blue', 'green', 'yellow'];

console.log(colors.includes('purple'))
console.log(colors.includes('green'))


// ejercicio 7 SIN HACER

const numbersPrimos = [2, 4, 5, 6, 7, 8, 9, 11, 13];
function esPrimo(number) {
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      return false
    }
  }
  return true;
}

let numerosPrimos = numbersPrimos.filter(num => esPrimo(num));
console.log(numerosPrimos);


// ejercicio 8

const nums = [10, 20, 30, 40, 50];
console.log(nums.map(num => num.toString()))


//ejercicio 9

const sentences = ['Hello world', 'JavaScript is fun', 'I love coding', 'Keep it simple'];
console.log(sentences.filter(frase => frase.length > 12))


// ejercicio 10

const nums2 = [1, 2, 3, 4, 5];

console.log(nums2.reverse());
console.log(nums2.map(num => num * 2))


//ejercicio 11 sin hacer

const names2 = ['Pin', 'Coche', 'Canarias', 'Astronauta'];

function palabraExtensa(array){
  let arrayLength = []
  array.forEach(element => {
    arrayLength.push(element.length)
  });
  arrayLength.sort(function(a, b){return b - a;})
  
  console.log(arrayLength)
}

palabraExtensa(names2)


//ejercicio 12

const tasks = ['Wash dishes', 'Do laundry', 'Clean room'];

tasks.push('Buy groceires');
tasks.unshift('Feed the cat')

console.log(tasks)

tasks.pop()
tasks.shift()

console.log(tasks)

//ejercicio 13

const words2 = ['apple', 'banana', 'avocado', 'cherry', 'apricot','pru'];

console.log(words2.filter(palabra => palabra.includes('a')))

let arraySinA = words2.filter(palabra => !palabra.includes('a'))

console.log(arraySinA.join(', '))

//ejercicio 14


const numbers3 = [45, 67, 12, 89, 34, 22];

console.log(numbers3.sort().reverse())

numbers3.sort().pop()

console.log(numbers3)

let numeroLargo = numbers3.length

let ultimoNumero = numbers3.sort()[numeroLargo - 1]

console.log(ultimoNumero)


//ejercicio 15

const phrases = ['I love JavaScript', 'Coding is great', 'Java is cool', 'I prefer Python'];

function contieneJava(array){
  array.forEach(element => {
    if(element.includes('Java')){
      console.log('Tiene java')
    }else{
      console.log('No tiene Java');
    }
  });
  arrayJava = array.map(element => element.includes('Java'))

  console.log(arrayJava)
}

contieneJava(phrases);