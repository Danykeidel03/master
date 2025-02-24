const date = new Date();
console.log(date);

// para sacar la de españa
const horaEspaña = new Date().toLocaleString("es-ES");

//crear fecha propia
const horaPropia = new Date("Febrero 24, 2025 12:00:00");
const horaPropia2 = new Date(2025, 1, 24, 19, 8, 0, 0);

//Metodos de extraccion en fechas

horaPropia.getFullYear();
horaPropia.getMonth();
horaPropia.getDate();
horaPropia.getHours();
horaPropia.getMinutes();
horaPropia.getSeconds();
horaPropia.getMilliseconds();
horaPropia.getTime();

//metodos set

let dateActual = new Date();

dateActual.setFullYear(2026);
dateActual.setMonth(5);
dateActual.setDate(15);
dateActual.setHours(10);

// metodos para trabajar con fechas

dateActual.setDate(dateActual.getDate() + 3);

//operaciones con fechas
const fecha1 = new Date("2025-02-24");
const fecha2 = new Date("2025-01-04");

console.log(fecha1 < fecha2);
console.log(fecha1 === fecha2);

let diferencia = fecha1 - fecha2;

let diferenciaEnDias = diferencia / (1000 * 60 * 60 * 24);


//otras funciones

horaPropia.toDateString()
horaPropia.toISOString()
horaPropia.toLocaleDateString()
horaPropia.toLocaleTimeString()
horaPropia.toUTCString()