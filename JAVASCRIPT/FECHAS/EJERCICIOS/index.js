// ejercicio 1 
const fecha1 = new Date("2025-02-24");
const fecha2 = new Date("2017-01-04");

function diferencia(fecha1, fecha2) {
    let diferencia = fecha1 - fecha2;
    let diferenciaEnDias = diferencia / (1000 * 60 * 60 * 24);
    let diferenciaEnAños = diferencia / (1000 * 60 * 60 * 24 * 30 * 366);
    let diferenciaEnMeses = diferencia / (1000 * 60 * 60 * 24 * 30);
    return `Son ${diferenciaEnAños} años, ${diferenciaEnMeses} meses, ${diferenciaEnDias} dias`
}

console.log(diferencia(fecha1, fecha2));

// ejercicio 2

function viernesTrece(año){
    let dias13 = []
    for(let mes = 0; mes < 12 ; mes++){
        let date = new Date(año,mes,13)
        if(date.getDay() == 5){
            dias13.push(date)
        }
    }
    return dias13;
}

console.log(viernesTrece(2026));


//ejercicio 3

let fechaActual = new Date()

