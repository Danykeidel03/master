function sumaCondicional(array) {
  let suma = 0;
  array.forEach((numero) => {
    if (numero % 3 === 0) {
      suma = suma + numero;
    }
  });
  console.log(`El resultado es: ${suma}`);
}

sumaCondicional([5, 12, 18, 7, 21, 30]);