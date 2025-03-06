// ejercicio 1

setTimeout(() => {
  console.log("Hola a los 3 segundos");
}, 3000);

// ejercicio 2

function salirNombre(name) {
  setTimeout(() => {
    console.log(`Hola ${name}`);
  }, 2000);
}

salirNombre("Daniel");

// ejercicio 3

setTimeout(() => {
  document.querySelector("html").style.backgroundColor = "red";
}, 5000);

// ejercicio 4

setTimeout(() => {
  console.log("Hola a los 3 segundos");
}, Math.random() * (5000 - 1000) + 1000);

// ejercicio 5

setTimeout(() => {
  document.querySelector("html").style.backgroundColor = "red";
}, 4000);

//INTERVAL

// ejercicio 1

setInterval(() => {
  console.log("Hola cada segundo");
}, 1000);

// ejercicio 2

setInterval(() => {
  document.querySelector("html").style.backgroundColor = "blue";
}, 2000);

// ejercicio 3

setInterval(() => {
  console.log(new Date());
}, 1000);

// ejercicio 4

let contador = 0;
setInterval(() => {
  if (contador < 5) {
    console.log(contador);
    contador++;
  }
}, 1000);

//ejercicio 5

const div = document.querySelector(".divParpadeante");

setInterval(() => {
  if ((div.style.display === "none")) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}, 1000);
