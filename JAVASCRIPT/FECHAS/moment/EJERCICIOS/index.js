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

// ejercicio 3
