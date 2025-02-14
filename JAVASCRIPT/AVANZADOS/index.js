// ejercicio 1

const inventario = [
  { nombre: 'Laptop', cantidad: 10, precio: 800 },
  { nombre: 'Teclado', cantidad: 50, precio: 20 },
  { nombre: 'Ratón', cantidad: 30, precio: 10 }
];

function gestionarInventario(accion, obj, array) {
  switch (accion) {
    case 'añadir':
      array.push(obj);
      console.log(`Se ha añadido el producto, ${obj.nombre}`);
      array.forEach(element => {
        console.log(element);
      });
      break;
    case 'eliminar':
      letnewArray = array.filter(inventarioObjeto => inventarioObjeto.nombre != obj)
      console.log(`Se ha eliminado el producto, ${obj}`);
      letnewArray.forEach(element => {
        console.log(element);
      });
      break;
    case 'filtrar':
      letnewArrayFiltrar = array.filter(inventarioObjeto => inventarioObjeto.precio > obj)
      console.log(`Objetos con mayor precio de ${obj}`);
      letnewArrayFiltrar.forEach(element => {
        console.log(element);
      });
      break;
    case 'ordenar':
      console.log(array.sort().reverse());
      break;
  }
}

//gestionarInventario('añadir', { nombre: 'Mouse', cantidad: 20, precio: 5 }, inventario);
//gestionarInventario('eliminar', 'Ratón', inventario);
//gestionarInventario('filtrar', 15, inventario);
//gestionarInventario('ordenar', 0, inventario);

//ejercicio 2

const estudiantes = [
  { nombre: 'Juan', nota: 8 },
  { nombre: 'Ana', nota: 5 },
  { nombre: 'Carlos', nota: 7 }
];

function analisisNotas(array) {
  let media = 0
  let suma = 0
  array.forEach(element => {
    if (element.nota >= 6) {
      console.log(`${element.nombre} tiene mas de un 5`);
    }
    suma = suma + element.nota;
  });
  console.log(`La media es ${suma / array.length}`);

  // preguntar si se puede de otra forma
  let arrayOrdenado = array.sort((a, b) => b.nota - a.nota)
  console.log(arrayOrdenado);

}

//analisisNotas(estudiantes);


//ejercicio 3

const transacciones = [200, -50, -100, 350, -20];

function analisisTransacciones(array) {
  let saldo = 0
  let arrayReversa = []
  array.forEach(element => {
    saldo = saldo + element;
  });
  console.log(`El saldo final es ${saldo}`);
  let arrayCien = array.filter(transaccion => transaccion > 100)
  console.log(arrayCien);

  for (let i = 0; i < array.length; i++) {
    arrayReversa.unshift(array[i]);
  }

  console.log(arrayReversa);

}

//analisisTransacciones(transacciones);


//ejercicio 4

const tareas = [
  { tarea: 'Comprar leche', completada: false },
  { tarea: 'Estudiar JavaScript', completada: true }
];

function gestionTareas(array, accion, obj) {
  switch (accion) {
    case 'añadir':
      array.push(obj);
      console.log(`Se ha añadido el producto, ${obj.nombre}`);
      array.forEach(element => {
        console.log(element);
      });
      break;
    case 'completar':
      console.log(`Se han completado la tarea, ${obj}`);
      array.forEach(element => {
        if (element.completada == false && element.tarea == obj) {
          element.completada = true;
        }
      });
      console.log(array);
      break;
    case 'diferenciar':
      let arrayCompletadas = [];
      let arrayNoCompletadas = [];
      array.forEach(element => {
        if (element.completada == false) {
          arrayNoCompletadas.push(element)
        } else {
          arrayCompletadas.push(element)
        }
      });
      console.log(arrayNoCompletadas);
      console.log(arrayCompletadas);
      break;
    case 'pendientes':
      let tareasPendientes = [];
      array.forEach(element => {
        if (element.completada == false) {
          tareasPendientes.push(element)
        }
      });
      console.log(tareasPendientes);

      break;
  }
}

//gestionTareas(tareas, 'añadir', { tarea: 'Estudiar Css', completada: false })
//gestionTareas(tareas, 'completar', "Estudiar Css")
//gestionTareas(tareas, 'diferenciar')
//gestionTareas(tareas, 'pendientes')

//toUpperCase()
// ej 7 sin usar el set 
// no hacer el reduce del 11 de momento

//ejercicio 5

const nombres = ['Ana', 'Juan', 'Pedro', 'Andrés'];

let mayusculasNames = nombres.map(name => name.toUpperCase());
console.log(mayusculasNames)

let nombresA = nombres.filter(name => name.includes('a') || name.includes('A'));
console.log(nombresA)

let nombresOrdenados = nombres.sort()
console.log(nombresOrdenados)

//ejercicio 6

const temperaturas = [22, 28, 18, 15, 32, 25];

let alta = temperaturas.sort()[temperaturas.length - 1]
console.log(alta);

let baja = temperaturas.sort().reverse()[temperaturas.length - 1]
console.log(baja);

function returnMedia(array) {
  let suma = 0
  array.forEach(element => {
    suma += element;
  });
  let media = suma / array.length;
  return (media);
}

console.log(returnMedia(temperaturas))

let fahrenheit = temperaturas.map(grados => (grados * 1.8) + 12)
console.log(fahrenheit);


// ejercicio 7

const contactos1 = ['Juan', 'Carlos', 'Ana'];
const contactos2 = ['Ana', 'Pedro', 'Luis'];

const contactos = [...contactos1, ...contactos2].sort();
console.log(contactos);

const contactosSinRepetir = [...new Set(contactos)];
console.log(contactosSinRepetir);

// ejercicio 8

const carrito = [
  { producto: 'Laptop', precio: 800 },
  { producto: 'Ratón', precio: 20 }
];

function gestionarCarrito(accion, valor, array) {
  switch (accion) {
    case 'añadir':
      array.push(valor);
      console.log(`Se ha añadido el producto, ${valor.producto}`);
      array.forEach(element => {
        console.log(element);
      });
      break;
    case 'eliminar':
      array.pop();
      array.forEach(element => {
        console.log(element);
      });
      break;
    case 'total':
      let valorTotal = 0
      array.forEach(element => {
        valorTotal = valorTotal + element.precio;
      });
      console.log(`El total es ${valorTotal}`);
      break;
    case 'ordenar':
      console.log(array.sort(function (a, b) { return b - a; }))
      break;
  }
}

//gestionarCarrito('añadir', { producto: 'Pantalla', precio: 200 }, carrito)
//gestionarCarrito('eliminar', 0, carrito)
//gestionarCarrito('total', 0, carrito)
//gestionarCarrito('ordenar', 0, carrito)


// ejercicio 9

const libros = [
  { titulo: 'JavaScript Avanzado', autor: 'Juan Pérez', año: 2019 },
  { titulo: 'JavaScript Avanzado', autor: 'Juan Pérez', año: 2011 },
  { titulo: 'JavaScript Básico', autor: 'Carlos López', año: 2008 }
];

let libros2010 = libros.filter(libro => libro.año > 2009)
console.log(libros2010);

console.log(libros2010.find(libro => libro.autor === 'Juan Pérez'));

let librosOrdenados = libros.sort((a, b) => a.año - b.año);
console.log(librosOrdenados);

// ejercicio 10

const participantes = ['Juan', 'Ana', 'Pedro', 'Luis'];

function gestionParticipantes(array, accion, obj) {
  switch (accion) {
    case 'añadir':
      array.push(obj);
      console.log(array)
      break;
    case 'delete':
      let arrayDelete = array.filter(element => element != obj);
      console.log(arrayDelete)
      break;
    case 'filtrar':
      console.log(array.filter(element => element.includes(obj)))
      break;
    case 'union':
      let unionArray = array.join('-');
      console.log(unionArray);
      break;
  }
}


//gestionParticipantes(participantes, 'añadir', 'María')
//gestionParticipantes(participantes, 'delete', 'Pedro')
//gestionParticipantes(participantes, 'filtrar', 'a')
//gestionParticipantes(participantes, 'union', '-')


// ejercicio 11



// ejercicio 12 NO ME SALE

const alumnos = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Ana', edad: 17 }
];

function añadirConSpread(obj) {
  let newAlumnos = [...alumnos, obj];
  console.log(newAlumnos);
}

añadirConSpread({ nombre: 'Pedro', edad: 19 });


function actualizarInfo(user, info) {
  const actualizarUser = { ...alumnos, ...info }
  console.log(actualizarUser);
}


//ejercicio 13

const texto = 'El sol brilla sobre el cielo azul y brillante';

let arrayFrase = texto.split(' ');
console.log(arrayFrase);

let cincoLetras = arrayFrase.filter(palabra => palabra.length > 5)
console.log(cincoLetras);

let textoOrdenados = arrayFrase.sort((a, b) => a.length - b.length).reverse();
console.log(textoOrdenados);



// ejercicio 14

const cola = ['Juan', 'Ana', 'Carlos'];

function gestionarCola(accion, valor, array) {
  switch (accion) {
    case 'añadir':
      array.push(valor);
      console.log(array);
      break;
    case 'añadirShift':
      var deleteCola = array.shift();
      console.log(array[0]);
      break;
    case 'mostrarSegundo':
      console.log(array[1]);
      break;
    case 'cantidad':
      console.log(array.length);
      break;
  }
}

gestionarCola('añadir', 'Pedro', cola)
gestionarCola('añadirShift', 'María', cola)
gestionarCola('mostrarSegundo', 0, cola)
gestionarCola('cantidad', 0, cola)