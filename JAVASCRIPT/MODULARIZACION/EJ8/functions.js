let recordatorios = [];

export function agregarRecordatorio(titulo, prioridad) {
  recordatorios.push[{ titulo: titulo, prioridad: prioridad }];
}

export function returnUrgentes(){
  return recordatorios.filter(recordatorio => recordatorio.prioridad === 'urgente');
}

export function ordenarPorPrioridad(){
  return recordatorios.sort((a,b) => a.prioridad.localeCompare(b.prioridad));
}

export function buscarNota(titulo){
  return recordatorios.find(recordatorio => recordatorio.titulo === titulo)
}

