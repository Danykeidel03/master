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