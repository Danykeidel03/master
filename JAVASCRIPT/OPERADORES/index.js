// ejercicio 1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

function multiplicar() {
  arrayFinal = [];
  const array = numeros.map((valor, index) =>
    index % 2 === 0 ? valor * 2 : valor * 3
  );
  array.forEach((element) => {
    if (element < 10) {
      arrayFinal.push(element);
    } else {
      arrayFinal.push(element - 5);
    }
  });
  return arrayFinal;
}

console.log(multiplicar());

// ejercicio 2

obj = {
  a: 4,
  b: 10,
};

function calculo2() {
  obj.b -= obj.a;
  obj.a = obj.a * 3;
  obj.b = obj.b / 2;
  return obj;
}

console.log(calculo2());

// ejercicio 3

inventario = [
  {
    nombre: "lampara",
    precio: 10,
  },
  {
    nombre: "coche",
    precio: 35000,
  },
  {
    nombre: "telefono",
    precio: 30,
  },
  {
    nombre: "rueda",
    precio: 12,
  },
];

function calculo3() {
  let newArray = [];
  inventario.forEach((element) => {
    if (element.precio < 20) {
      newArray.push({
        nombre: element.nombre,
        precio: element.precio + element.precio * 0.15,
      });
    } else if (element.precio >= 50) {
      newArray.push({
        nombre: element.nombre,
        precio: element.precio - element.precio * 0.1,
      });
    } else {
      newArray.push({ nombre: element.nombre, precio: element.precio });
    }
  });
  return newArray;
}
console.log(calculo3());

// ejercicio 4

arrObj = [
  {
    nombre: "Daniel",
    edad: 20,
    activo: true,
  },
  {
    nombre: "Pedro",
    edad: 27,
    activo: false,
  },
  {
    nombre: "Jose",
    edad: 12,
    activo: false,
  },
  {
    nombre: "Tino",
    edad: 33,
    activo: true,
  },
];

function calculo4() {
  return arrObj.filter((alumno) => alumno.edad > 18 && alumno.activo === true);
}

console.log(calculo4());

// ejercicio 5

let contraseña = "Prueba.123";

function validarPass(pass) {
  if (
    pass.length > 7 &&
    !pass.includes(" ") &&
    /[A-Z]/.test(pass) &&
    /\d/.test(pass)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(validarPass(contraseña));

// ejercicio 6

const numero = 5;

function calculo6(numero) {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Cero";
  }
}

console.log(calculo6(numero));

// ejercicio 7

let contador = {
  valor: 6,
};

function calculo7(objeto) {
  if (objeto.valor % 2 === 0) {
    objeto.valor++;
    return objeto.valor;
  } else {
    objeto.valor--;
    return objeto.valor;
  }
}

console.log(calculo7(contador));

// ejercicio 8

const numero2 = 6;

function calculo8(numero) {
  if (numero % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(calculo8(numero2));

// ejercicio 9

function calculo9(numero) {
  let n1 = numero << 1;
  let n2 = numero >> 1;
  return [n1, n2];
}

console.log(calculo9(6));

// ejercicio 10 no lo entiendo

// ejercicio 11

let objetos = [
  { nombre: "placa", stock: 10 },
  { nombre: "bola", stock: 5 },
  { nombre: "pelota", stock: 0 },
];

function calculo11(objetos) {
  return objetos.map((obj) => (obj.stock > 0 ? "Hay stock" : "No hay stock"));
}

console.log(calculo11(objetos));

// ejercicio 12

let objetos2 = [
  { nombre: "placa", stock: 10, precio: 10 },
  { nombre: "bola", stock: 5, precio: 5 },
  { nombre: "pelota", stock: 10, precio: 20 },
];

function calculo12(objetos) {
  let sumaTotal = 0;
  objetos.forEach((element) => {
    sumaTotal += element.stock * element.precio;
  });
  return sumaTotal;
}

console.log(calculo12(objetos2));

// ejercicio 13

let arrPersonas = [
  {
    nombre: "Daniel",
    edad: 20,
  },
  {
    nombre: "Pedro",
    edad: 27,
  },
  {
    nombre: "Jose",
    edad: 12,
  },
  {
    nombre: "Tino",
    edad: 11,
  },
];

function calculo13(personas) {
  return personas.filter((persona) => persona.edad > 18);
}

console.log(calculo13(arrPersonas));

// ejercicio 14

let arrObjNivel = [
  {
    nombre: "Daniel",
    nivel: "basico",
  },
  {
    nombre: "Pedro",
    nivel: "intermedio",
  },
  {
    nombre: "Jose",
    nivel: "basico",
  },
  {
    nombre: "Tino",
    nivel: "intermedio",
  },
];

function calculo14(obj) {
  obj.forEach((element) => {
    if (element.nivel === "intermedio") {
      element.nivel = "avanzado";
    } else if (element.nivel === "basico") {
      element.nivel = "intermedio";
    }
  });
  return obj;
}

console.log(calculo14(arrObjNivel));

// ejercicio 15

let arrPersonas2 = [
  {
    nombre: "Daniel",
    edad: 20,
  },
  {
    nombre: "Pedro",
    edad: 27,
  },
  {
    nombre: "Jose",
    edad: 12,
  },
  {
    nombre: "Tino",
    edad: 11,
  },
];

function calculo15(personas) {
  personas.forEach((element) => {
    if (element.edad < 12) {
      element["categoria"] = "Infantil";
    } else if (element.edad >= 12 && element.edad <= 17) {
      element["categoria"] = "Adolescente";
    } else {
      element["categoria"] = "Adulto";
    }
  });
  return personas;
}

console.log(calculo15(arrPersonas2));

// ejercicio 16

let arrayNumeros = [-2, -10, 0, 3, 4, 5, 11, 34];

function calculo16(array) {
  return array.map((numero) => (numero < 0 ? 0 : numero));
}

console.log(calculo16(arrayNumeros));

// ejercicio 17

const arrayNombres2 = ["daniel", "juan", "pedro"];

function calculo17(array) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push[{ nombre: element.toUpperCase(), longitud: element.length }];
  });
  return newArray;
}

console.log(calculo17(arrayNombres2));

// ejercicio 18

lista = ["Pedro", "Fernando", "Laura"];
confirmaciones = [true, true, false];

function calculo18() {
  return lista.filter((persona, index) => {
    if (confirmaciones[index]) {
      return persona;
    }
  });
}

console.log(calculo18());

// ejercicio 19

const dni = 71463456;

function calcularDNI(numero) {
  if (numero >= 0 && numero <= 99999999) {
    //CALCULAMOS EL RESTO DE DIVIDIR EL NÚMERO ENTRE
    resto = numero % 23;
    //SEGÚN SEA EL RESTO ASIGNAMOS UN VALOR A LA VARIABLE LETRA
    letras = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
    ];
    letra = letras[resto];

    return numero+letra
  }
}

console.log(calcularDNI(dni))


// ejercicio 20

const number = [2, 3, 2, 5, 7, 2, 4, 3, 8];

function calculo20(cadenaNumeros){
   return cadenaNumeros.filter((element, index) => element === index)
}

console.log(calculo20(number))