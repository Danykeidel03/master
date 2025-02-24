const numerosDecimales = [
  "1.23",
  "45.67",
  "89.01",
  "23.456",
  "78.9",
  "0.123",
  "456.789",
  "10.01",
  "99.99",
  "3.1416",
];

function sacarObj(array){
    let arrayFinal = []
    array.forEach(n => {
        arrayFinal.push({original: n, numero: Number(n), exponencial: Number(n).toExponential(1), redondeado: Math.round(n)})
    });
    return arrayFinal
}

console.log(sacarObj(numerosDecimales))