let pedidos = []
let idPedido = 1


function agregarPedido(nombre, plato){
    pedidos.push({nombre: nombre, plato: plato, numeroPedido: idPedido})
    idPedido++
    return pedidos
}


function eliminarPrimerPedido(){
    pedidos.shift();
    return pedidos;
}

function contarPedidos(){
    return `Hay ${pedidos.length} pedidos en total`
}

function encontrarPedidos(nombreCliente){
    let arrayPedidos = []
    pedidos.forEach(element => {
        if(element.nombre === nombreCliente) {
            arrayPedidos.push(element)
        }
    });
    return arrayPedidos;
}


function returnPlatillos(){
    arrayPlatos = pedidos.map(element => element.plato)
    return arrayPlatos
}


function encontrarPlatos(nombrePlatos){
    if(pedidos.includes(nombrePlatos)){
        return true
    }else{
        return false
    }
}

module.exports = {agregarPedido, eliminarPrimerPedido, contarPedidos, encontrarPedidos, returnPlatillos, encontrarPlatos}