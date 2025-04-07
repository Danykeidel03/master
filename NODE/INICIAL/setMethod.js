/**
 * SET 
 * NO PUEDE EXISTIR MAS DE 1 ELEMENTO CON EL MISMO VALOR
 */

const numbers = new Set([1,4,3,6,5,8])

/**
 * METODOS
 */

try{
    //Añadir un elemento
    numbers.add(4);
    console.log(numbers);

    //eliminar elemento
    numbers.delete(8);
    console.log(numbers)

    //comprobar si existe un valor
    if(numbers.has(5)){
        console.log('el valor ya existe en la coleccion')
    }else{
        numbers.add(5)
    }

    //borrar todo
    //numbers.clear()

    //sacar la lonfitud
    console.log(numbers.size)

    //foreach
    numbers.forEach(element => {
        console.log(element)
    });
}catch(e){
    console.log(e)
}