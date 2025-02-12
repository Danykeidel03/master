const estudiantes = [
    { nombre: "Laura", edad: 22, curso: "Matemáticas" },
    { nombre: "Carlos", edad: 25, curso: "Física" },
    { nombre: "Marta", edad: 20, curso: "Programación" }
];

function mostrarEstudiantes(est){
    est.forEach(element => {
        console.log(`${element.nombre} tiene ${element.edad} años y está inscrito en el curso de ${element.curso}`)
    });
}

mostrarEstudiantes(estudiantes);