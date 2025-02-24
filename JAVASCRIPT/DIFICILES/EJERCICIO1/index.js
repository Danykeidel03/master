let numeros = [1, 2, 3, 4]

function conversorString(numeros) {
  let newArray = []
  numeros.forEach(num => {
    if(typeof num.toString() === 'string'){
      newArray.push(num.toString())
    }
  })
  return newArray
}

console.log(conversorString(numeros))