let alumnos = [];

function añadirAlumno(nombre, notas) {
  alumnos.push({ nombre: nombre, notas: { notas } });
}

function calcularPromedio(nombre) {
  let arrayNotasAlumno = alumnos.map((alumno) => alumno.nombre === nombre);
  let nota = 0;
  arrayNotasAlumno.forEach((element) => {
    let suma = 0;
    element.notas.forEach((notas) => {
      suma += notas;
    });
    nota = suma / element.notas.length;
  });
  return nota;
}

function alumnosProbados() {
  let arrayAprobados = [];
  alumnos.forEach((element) => {
    if (calcularPromedio(element.nombre) >= 5) {
      arrayAprobados.push[{ nombre: element.nombre, notas: element.notas }];
    }
  });
  return arrayAprobados;
}

function ordenarPromedios() {
  let arrayPromedio = [];
  alumnos.forEach((element) => {
    arrayPromedio.push[{ nombre: element.nombre, notas: calcularPromedio(element.nombre) }];
  });
  return arrayPromedio.sort();
}

function buscarAlumno(nombre){
    return alumnos.filter(alumno => alumno.nombre === nombre);
}


module.exports = {añadirAlumno,calcularPromedio,alumnosProbados,ordenarPromedios,buscarAlumno}