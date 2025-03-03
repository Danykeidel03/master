// CONSTRUCTORES

function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

const per = new Persona('Dani', 33);

console.log(per);

// FUNCION FLECHA EN THIS NO FUNCIONA
const persona = {
    nombre: 'PEDRO',
    edad: 49,
    mostrarEdad: () => {
        console.log(this.edad);
    }
}

const persona2 = {
    nombre: 'Dani',
    edad: 33,
    mostrarEdad: function () {
        console.log(this.edad);
    }
}

console.log(persona.mostrarEdad());
console.log(persona2.mostrarEdad());