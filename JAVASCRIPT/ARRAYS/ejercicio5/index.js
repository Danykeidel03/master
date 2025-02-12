function calcularEstadisticas(arrayNum){
    let suma = 0;
    let media = 0;
    let mayor = arrayNum[0];
    let menor = arrayNum[0];
   
    arrayNum.forEach(numero => {
        suma = suma + numero
        if (numero > mayor){
            media = numero
        }

        if (numero > menor){
            menor = numero
        }
    });

    media = suma / arrayNum.length

    console.log(`La suma es : ${suma} La media es : ${media} El mayor numero es: ${mayor} y el menor es ${menor}`)
    
}
calcularEstadisticas([4, 8, 15, 16, 23, 42]);