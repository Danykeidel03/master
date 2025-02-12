let palabraMasLarga = (palabras) => {
  let letras = "";
  palabras.forEach(element => {
    if(element.length > letras.length){
      letras = element;
    }
  });
  console.log(letras);
}



palabraMasLarga(["sol", "estrella", "planeta", "galaxia"]);
// Resultado esperado: "estrella"