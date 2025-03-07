//SESION

// ejercicio 1

sessionStorage.setItem("mensaje", "hola");
console.log(sessionStorage.getItem("mensaje"));

// ejercicio 2

let contador = sessionStorage.getItem("contadorVisitas");
contador++; // Aumentar el contador

sessionStorage.setItem("contadorVisitas", contador);

document.getElementById("contador").textContent = contador;

// ejercicio 3

document.querySelector(".mostrar").addEventListener("click", () => {
  let nombre = document.querySelector(".name").value;
  if (nombre) {
    sessionStorage.setItem("Nombre", nombre);
  }
});

//ejercicio 4

document.querySelector(".delete").addEventListener("click", () => {
  sessionStorage.removeItem("Nombre");
});

//ejercicio 5

document.querySelector(".comprobar").addEventListener("click", () => {
  if (sessionStorage.getItem("Nombre")) {
    console.log("existe el nombre");
  } else {
    console.log("no existe el nombre");
  }
});


//LOCAL STORAGE

//ejercicio 1

if (localStorage.getItem("Color")) {
  document.querySelector('html').style.backgroundColor = localStorage.getItem("Color")
}

document.querySelector(".aplicar").addEventListener("click", () => {
  let color = document.querySelector(".color").value;
  if (color) {
    localStorage.setItem("Color", color);
  }
});

//ejercicio 2

document.querySelector(".aplicarTareas").addEventListener("click", () => {
  let tareas = document.querySelector(".tareas").value;
  if (tareas) {
    localStorage.setItem("tareas", tareas);
  }
});


//ejercicio 3

let contadorLocal = localStorage.getItem("contadorVisitasLocal");
contadorLocal++; // Aumentar el contador

localStorage.setItem("contadorVisitasLocal", contador);

//ejercicio 4

document.querySelector(".deleteColor").addEventListener("click", () => {
  let color = localStorage.getItem("Color");
  if (color) {
    localStorage.removeItem("Color");
  }
});

//ejercicio 5

document.querySelector(".removeAll").addEventListener("click", () => {
  localStorage.clear()
});