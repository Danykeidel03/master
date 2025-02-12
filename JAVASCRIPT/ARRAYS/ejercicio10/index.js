let contarCaracteres = (palabra) => {
  let arrayFinal = {};
  for (let elements in palabra) {
    let letra = palabra[elements]
    if(arrayFinal[letra]){
      arrayFinal[letra]++
    }else{
      arrayFinal[letra] = 1
    }
  }

  console.log(arrayFinal)
};

contarCaracteres("programacion");
// Resultado esperado: { p: 1, r: 2, o: 2, g: 1, a: 2, m: 1, c: 1, i: 1, n: 1 }
