/**
 * JS PARA LA PAGINA DE EJERCICIOS
 */

import * as exercises from "./exercises/exercisesFunctions.js";
import * as openCloseMenu from "./dom/openCloseMenu.js";
import * as user from "./user/userFunctions.js";
import * as modal from "./dom/openModal.js";
import * as createNewElement from "./dom/createElement.js";
import * as navigation from "./navigation/navigation.js";


navigation.coordsUser()
user.lookUser()
user.addName()
user.logOut()
exercises.toAddExercise()
openCloseMenu.openCloseMenu()
exercises.showExercises(document.querySelector('.divEjercicios'),false)
exercises.showExercises(document.querySelector('.divEjerciciosRestantes div'),false)
exercises.showExercises(document.querySelector('.divEjerciciosHechos div'),true)
exercises.customExercise()

const closeButtonEnd = document.querySelector('.modal-closeFinalizarDia')
const overlayEnd = document.querySelector('.overlayModalFinalizarDia')
const windowEnd = document.querySelector('.modalFinalizarDia')

const buttonEnd = document.querySelector('.finalizarDia')
modal.openCloseModal(buttonEnd, closeButtonEnd, overlayEnd, windowEnd)

document.querySelector('.finalizarRutina').addEventListener('click', () => {
    const finalMessage = exercises.endRouine()
    console.log(finalMessage);
})

let totalExercises = document.querySelectorAll('.divEjercicios .ejercicio')
const noExercises = createNewElement.createNewElement('h2', 'noExercises', 'No tienes ejercicios pendientes')
if(totalExercises.length == 0){
    document.querySelector('.divEjercicios').appendChild(noExercises)
    document.querySelector('.divEjercicios').classList.add('empty')
}else{
    noExercises.remove()
    document.querySelector('.divEjercicios').classList.remove('empty')
}