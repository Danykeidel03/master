function addDiv(txt){
    const newDiv = document.createElement('div');
    newDiv.classList.add('elementoRemplazar')
    newDiv.textContent = txt
    return newDiv
}

// creacion de element

let createDiv = document.querySelector('.nuevosDiv')

document.querySelector('.createElement').addEventListener('click', () => {
    let numeroCreateDiv = document.querySelectorAll('.nuevosDiv div').length
    const divNew = addDiv(`Elemento numero ${numeroCreateDiv}`)
    createDiv.appendChild(divNew)
})


// añadir elements
let añadirDiv = document.querySelector('.insercionContainer')

document.querySelector('#btnInsertarAntes').addEventListener('click', () => {
    const divNew = addDiv(`Elemento Antes`)
    añadirDiv.insertBefore(divNew, document.querySelector('.elementoRef'))
})

document.querySelector('#btnInsertarDespues').addEventListener('click', () => {
    const divNew = addDiv(`Elemento Despues`)
    añadirDiv.insertBefore(divNew, document.querySelector('.elementoUltimo'))
})


document.querySelector('#btnInsertarInicio').addEventListener('click', () => {
    const divNew = addDiv(`Elemento Inicio`)
    añadirDiv.prepend(divNew)
})

document.querySelector('#btnInsertarFinal').addEventListener('click', () => {
    const divNew = addDiv(`Elemento Fin`)
    añadirDiv.appendChild(divNew)
})

// eliminar de element

document.querySelector('.deleteElement').addEventListener('click', () => {
    let numeroCreateDiv = document.querySelectorAll('.nuevosDiv div').length
    console.log(numeroCreateDiv);
    if(numeroCreateDiv > 0){
        document.querySelectorAll('.nuevosDiv div')[numeroCreateDiv - 1].remove()
    }
})

//cambiar elementos

let contador = 1

document.querySelector('.remplazarElement').addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('elementoRemplazarFin')
    newDiv.textContent = (`Reemplazado por elemento numero ${contador}`)
    document.querySelector('.elementoRemplazarFin').replaceWith(newDiv)
    contador++
})