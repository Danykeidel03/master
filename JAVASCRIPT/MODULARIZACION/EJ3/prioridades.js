let prioridades = []


function agregarPrioridades(obj) {
    prioridades.push(obj);
    return prioridades;
}

function filtrarPrioridades(estado) {
    return prioridades.filter(element => element.estado === estado);
}

function ordenarPorPrioridad(prioridad) {
    return prioridades.sort((a, b) => a.prioridad - b.prioridad);
}

function eliminarUltimo() {
    prioridades.pop();
    return prioridades;
}

function pasarAString() {
    return prioridades.toString(' ,')
}

module.exports = {agregarPrioridades, filtrarPrioridades, ordenarPorPrioridad, eliminarUltimo, pasarAString}