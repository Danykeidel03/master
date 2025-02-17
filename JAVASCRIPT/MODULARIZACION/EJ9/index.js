let almacen = []

function agregarStock(producto, stock){
    if(stock > 0){
        almacen.push[{producto: producto, stock: stock}]
    }else{
        return 'No se puede añadir producto sin stock'
    }
}

function eliminarProducto(){
    almacen.pop()
}

function filtrarStockBajo(){
    return almacen.filter(producto => producto.stock < 6)
}

function ordenarStock(){
    return almacen.sort((a,b) => a.stock.localeCompare(b.stock));
}