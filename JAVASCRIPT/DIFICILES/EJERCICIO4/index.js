let objetos = [
    {nombre: 'raton', valor: 200},
    {nombre: 'teclado', valor: 300},
    {nombre: 'mouse', valor: 150},
    {nombre: 'monitor', valor: 500},
    {nombre: 'pantalla', valor: 800},
    {nombre: 'computadora', valor: 1200},
    {nombre: 'impresora', valor: 400}
];

function filtrarObj(array, umbral){
    let newArray = [];
    array.forEach(objeto => {
        if(Math.abs(objeto.valor) <= umbral){
            newArray.push(objeto);
        }
    });
    return newArray;
}

console.log(filtrarObj(objetos, 300));