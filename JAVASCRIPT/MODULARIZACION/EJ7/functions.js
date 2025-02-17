let gestionHoras = [];

export function agregarHoras(trabajador, horas){
  gestionHoras.push[{empleado: trabajador, horas:horas}];
}

export function sumaHoras(){
  let horasTotales = 0
  gestionHoras.forEach(element => {
    horasTotales =+ element.horas
  });
  return horasTotales;
}

export function filtrarHoras(){
  return gestionHoras.filter(horas => horas.horas > 40)
}

export function ordenarhoras(){
  return gestionHoras.sort((a,b) => a.horas.localeCompare(b.horas));
}