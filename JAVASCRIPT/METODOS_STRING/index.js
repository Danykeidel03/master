// ejercicio 1

const nombres = ["Daniel Fernandez Fernandez", "Daniel Fernandez Fernandez"];

function obtenerIniciales(names) {
  let arrayFinal = [];
  names.forEach((element) => {
    let nombre = element.split(" ");
    let iniciales = "";
    nombre.forEach((element2) => {
      iniciales += element2[0];
    });
    arrayFinal.push(iniciales);
  });
  return arrayFinal;
}

console.log(obtenerIniciales(nombres));

// ejercicio 2

const mails = ["dani@gmail.com", "hola@hola.com", "pedro@gmail.com"];

function returnMail(array, mail) {
  let arrayFinal = [];
  array.forEach((element) => {
    if (element.includes("@" + mail)) {
      arrayFinal.push(element);
    }
  });
  return arrayFinal;
}

console.log(returnMail(mails, "hola"));

//ejercicio 3

let txt = "Hola como estas";

function buscarPalabra(frase, palabra) {
  return frase.includes(palabra) ? true : false;
}

console.log(buscarPalabra(txt, "como"));

// ejercicio 4

const mails2 = ["dani@gmail.com", "hola@hola.com", "pedro@gmail.com"];

function quitarArroba(mails) {
  return mails.map((element) => element.split("@")[0]);
}

console.log(quitarArroba(mails2));

// ejercicio 5

let palabrasProhibidas = ["como", "estas"];

function quitarPalabras(array, txt) {
  let frase = txt.split(" ");
  let arrayFinal = frase.map((element) =>
    array.includes(element) ? "****" : element
  );
  return arrayFinal.join(" ");
}

console.log(quitarPalabras(palabrasProhibidas, txt));

// ejercicio 6

const nombres3 = ["dAniEL", "pABlo"];

function formatearTXT(array) {
  return array.map(
    (element) =>
      element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
  );
}

console.log(formatearTXT(nombres3));

//ejercicio 7

const frases = ["   Hola como estas", "Estoy bien      "];

function quitarEspacios(array) {
  return array.map((element) => element.trimEnd().trimStart());
}

console.log(quitarEspacios(frases));

//ejercicio 8

function saberUltmaPalabra(txt, palabra) {
  let array = txt.split(" ");
  return array[array.length - 1] === palabra ? true : false;
}

console.log(saberUltmaPalabra(txt, "estas"));

//ejercicio 9

function repetirPalabra(palabra, numero) {
  return palabra.repeat(numero);
}

console.log(repetirPalabra("si ", 10));

//ejercicio 10

function encontrarLetraUltimaPosicion(palabra, letra) {
  return palabra.lastIndexOf(letra);
}

console.log(encontrarLetraUltimaPosicion("holalalala", "a"));

//ejercicio 11

function extraerInicioFinal(frase, inicio, final) {
  return frase.slice(inicio, final);
}

console.log(extraerInicioFinal("hola", 1, 3));

// ejercicio 12

const nombres4 = ["Daniel Fernandez Fernandez", "Daniel Fernandez Fernandez"];

function sacarObjNombres(array) {
  let arrayFinal = [];
  array.forEach((element) => {
    let arrayNames = element.split(" ");
    arrayFinal.push({
      nombre: arrayNames[0],
      apellidos: `${arrayNames[1]}  ${arrayNames[2]}`,
    });
  });
  return arrayFinal;
}

console.log(sacarObjNombres(nombres4));

// ejercicio 13

function alternarLetras(txt){
  let arrayLetras = txt.split('')
  let arrayAlterado = arrayLetras.map((element,index) => index%2 === 0 ? element.toUpperCase() : element.toLowerCase())
  return arrayAlterado.join('')
}

console.log(alternarLetras(txt));

// ejercicio 14

let txt2 = "hola como estas";
let palabrasProhibidas3 = ["Hola", "estas"];

function palabrasProhibidasFunction(txt, array) {
  variable = false;
  txt.split(" ").forEach((element) => {
    if (array.includes(element)) {
      variable = true;
    }
  });
  return variable;
}

console.log(palabrasProhibidasFunction(txt2, palabrasProhibidas3));

// ejercicio 15

function contarLetras(txt, letra) {
  let contador = 0;
  txt.split("").forEach((element) => {
    if (element === letra) {
      contador++;
    }
  });
  return contador;
}

console.log(contarLetras(txt2, "o"));

// ejercicio 16

function deleteEspacios(txt) {
  return txt.split(" ").join("");
}

console.log(deleteEspacios(txt));

// ejercicio 17

const nombres5 = ["Daniel Fernandez", "Daniel Fernandez"];

function crearUsuarios(names) {
  let nombresUsu = [];
  names.forEach((element) => {
    let nameFinal = element.split(" ");
    nombresUsu.push(nameFinal[0].charAt(0) + nameFinal[1].toLowerCase());
  });
  return nombresUsu;
}

console.log(crearUsuarios(nombres5));

// ejercicio 18

let txt3 = "hola como estas";

function replaceWord(txt, palabra) {
  return txt.replaceAll(palabra, 'cambio')
}

console.log(replaceWord(txt3, 'como'))

//ejercicio 19

function verificarCadena(txt,palabra){
    return (txt.startsWith(palabra) ? true : false)
}

console.log(verificarCadena(txt, 'Hola'))

//ejercicio 20

function returnValorPrimitivo(obj){
  return obj.valueOf()
}

console.log(returnValorPrimitivo('hola'))