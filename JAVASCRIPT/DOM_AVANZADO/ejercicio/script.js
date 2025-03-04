// creacion de element

let createDiv = document.querySelector('.nuevosDiv')

document.querySelector('.createElement').addEventListener('click', () => {
    let numeroCreateDiv = document.querySelectorAll('.nuevosDiv div').length
    const newDiv = document.createElement('div');
    newDiv.classList.add('elementCreate')
    newDiv.textContent = (`Elemento numero ${numeroCreateDiv}`)
    createDiv.appendChild(newDiv)
})


// añadir elements
let añadirDiv = document.querySelector('.insercionContainer')

document.querySelector('#btnInsertarAntes').addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('elementAntes')
    newDiv.textContent = (`Elemento Antes`)
    añadirDiv.insertBefore(newDiv, document.querySelector('.elementoRef'))
})

document.querySelector('#btnInsertarDespues').addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('elementDespues')
    newDiv.textContent = (`Elemento Despues`)
    añadirDiv.insertBefore(newDiv, document.querySelector('.elementoUltimo'))
})


document.querySelector('#btnInsertarInicio').addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('elementPrincipio')
    newDiv.textContent = (`Elemento Inicio`)
    añadirDiv.prepend(newDiv)
})

document.querySelector('#btnInsertarFinal').addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('elementFin')
    newDiv.textContent = (`Elemento Fin`)
    añadirDiv.appendChild(newDiv)
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
    newDiv.classList.add('elementoRemplazar')
    newDiv.textContent = (`Reemplazado por elemento numero ${contador}`)
    document.querySelector('.elementoRemplazar').replaceWith(newDiv)
    contador++
})