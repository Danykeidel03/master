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

