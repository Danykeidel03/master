// ejercicio 1
function diffFecha() {
  const customDate = moment("2024-12-25", "YYYY-MM-DD");
  const customDate1 = moment("2024-12-1", "YYYY-MM-DD");
  return customDate.diff(customDate1, 'days')
}


// ejercicio 2

function sumaFechas(fecha){
    const fechaOriginal = moment("2023-08-15", "YYYY-MM-DD");
    fechaOriginal.add(fechaOriginal.date(), 'days')
    fechaOriginal.add(fechaOriginal.month(), 'month')
    fechaOriginal.add(fechaOriginal.year(), 'year')
    return fechaOriginal
}

// 3. Comparación de fechas
// Compara dos fechas: una para el 10 de febrero de 2025 y otra para el 12 de febrero de 2025. 
// Usa los métodos isBefore(), isAfter() y isSame() para verificar cuál es anterior, cuál es posterior, y si son iguales.
const dateComparison = () => {
  const firstDate = moment("2025-02-10");
  const secondDate = moment("2025-02-12");

  console.log(firstDate.isBefore(secondDate));
  console.log(firstDate.isAfter(firstDate));
  console.log(firstDate.isSame(secondDate));
}
// dateComparison();

// 4. Fecha con diferente zona horaria
// Crea una fecha para el 1 de mayo de 2025 a las 12:00 en la zona horaria de "Asia/Tokyo". 
// Luego, muestra esta fecha en formato "YYYY-MM-DD HH:mm:ss" y en la zona horaria de "Europe/Madrid". 
// ¿Cuál es la diferencia de hora entre ambas zonas?
const timeZoneDifference = () => {
  let asianTime = moment.tz("2025-05-01 12:00", "Asia/Tokyo");
  let madridTime = asianTime.clone().tz("Europe/Madrid");

  const diffHours = asianTime.utcOffset() - madridTime.utcOffset();

  console.log(`Hora en Tokio: ${asianTime.format("YYYY-MM-DD HH:mm:ss")}`);
  console.log(`Hora en Madrid: ${madridTime.format("YYYY-MM-DD HH:mm:ss")}`);
  console.log(`Diferencia horaria: ${diffHours / 60} horas`);
}
// timeZoneDifference();

// 5. Restar fechas en meses
// Crea una fecha para el 1 de enero de 2025 y otra para el 1 de octubre de 2025. 
// Calcula la diferencia en meses entre estas dos fechas y muestra el resultado en consola.
const minusMonths = () => {
  const firstDate = moment("2025-01-01");
  const secondDate = moment("2025-10-01");

  const diffMonths = secondDate.diff(firstDate, "months");
  console.log(`La diferencia es de ${diffMonths} meses`);
}
// minusMonths();

// 6. Formato personalizado
// Crea una fecha para el 25 de diciembre de 2025. Muestra esta fecha en formato 
// "El día DD de MMMM de YYYY es un dddd".
const dateFormat = () => {
  const date = moment("2025-12-25");

  console.log(`The day ${date.format("DD")} of ${date.format("MMMM")} of ${date.format("YYYY")} it's a ${date.format("dddd")}`);
}
// dateFormat();

// 7. Sumar tiempo y comparar
// Crea una fecha para el 1 de junio de 2025. Suma 7 días y 3 horas. Luego, 
// compara si la nueva fecha es anterior a una fecha futura, como el 10 de junio de 2025.
const sumAndCompare = () => {
  let firstDate = moment("2025-06-01 12:00");
  let newDate = firstDate.add(7, "days").add(3, "hours");
  console.log(newDate.format("YYYY-MM-DD HH:mm"));
  let dateComparison = moment("2025-06-10");

  let diffDays = newDate.isAfter(dateComparison);

  console.log(diffDays);
}
// sumAndCompare();

// 8. Manipulación compleja de fechas
// Crea una fecha para el 1 de marzo de 2023. Resta 4 meses y 10 días, y luego suma 1 año y 
// 2 semanas a la nueva fecha. Muestra la fecha final en formato "DD-MM-YYYY".
const manipulationDates = () => {
  let date = moment("2023-03-01");
  let dateSubstraction = date.subtract(4, "months").subtract(10, "days");
  let addDate = dateSubstraction.add(1, "years").add(2, "weeks");

  console.log(addDate.format("DD-MM-YYYY"));
}
// manipulationDates();

// 9. Fecha inválida y manejo de errores
// Crea una fecha con un valor inválido, como "2025-02-30". Usa el método isValid() para comprobar 
// si la fecha es válida y muestra un mensaje apropiado según el resultado.
const invalidDate = () => {
  const date = moment("2025-02-30");

  return date.isValid() ? console.log("Fecha es valida") : console.log("Fecha no valida");
}
// invalidDate();

// 10. Diferencia en años, meses y días
// Crea dos fechas: una para el 1 de enero de 2020 y otra para el 15 de marzo de 2025. Calcula la diferencia en 
// años, meses y días entre ambas fechas y muestra el resultado en consola.
const differenceYearsMonthsDays = () => {
  const firstDate = moment("2020-01-01");
  const secondDate = moment("2025-03-15");

  let diffYears = secondDate.diff(firstDate, "years");
  let diffMonths = secondDate.diff(firstDate, "months");
  let diffDays = secondDate.diff(firstDate, "days");

  console.log(`La diferencia es de ${diffYears} años, ${diffMonths} meses y ${diffDays} dias`);
}
// differenceYearsMonthsDays();
