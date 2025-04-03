/**
 * JS PARA LA PAGINA DE EJERCICIOS
 */

import * as exercises from "./exercises/exercisesFunctions.js";
import * as openCloseMenu from "./dom/openCloseMenu.js";
import * as user from "./user/userFunctions.js";
import * as modal from "./dom/openModal.js";


user.lookUser()
user.addName()
user.logOut()
exercises.toAddExercise()
openCloseMenu.openCloseMenu()
exercises.showExercises(document.querySelector('.divEjercicios'))

const btnAbrirAddCustom = document.querySelector('.buttonAddCustom')
const closeButtonAddCustom = document.querySelector('.modal-closeExercise')
const overlayAddCustom = document.querySelector('.overlayModalExercise')
const ventanaAddCustom = document.querySelector('.modalAddCustomExercise')

modal.openCloseModal(btnAbrirAddCustom, closeButtonAddCustom, overlayAddCustom, ventanaAddCustom)
document.querySelector('.addCustomExercise').addEventListener('click', function(){
    exercises.toAddExerciseCustom()
    ventanaAddCustom.classList.contains('active') ? ventanaAddCustom.classList.remove('active') : ventanaAddCustom.classList.add('active')
})

const buttonEnd = document.querySelector('.finalizarDia')