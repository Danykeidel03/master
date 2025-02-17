let alumnos = [];

function añadirAlumno(nombre, notas) {
    alumnos.push({ nombre: nombre, notas: { notas } })
}

function calcularPromedio(nombre) {
    let arrayNotasAlumno = alumnos.map(alumno => alumno.nombre === nombre)
    let nota = 0
    arrayNotasAlumno.forEach(element => {
        let suma = 0
        element.notas.forEach(notas => {
            suma += notas
        });
        nota = suma / element.notas.length
    });
    return nota;
}

function alumnosProbados(){

}