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
exercises.showExercises(document.querySelector('.divEjercicios'),false)
exercises.showExercises(document.querySelector('.divEjerciciosRestantes div'),false)
exercises.showExercises(document.querySelector('.divEjerciciosHechos div'),true)
exercises.customExercise()

const closeButtonEnd = document.querySelector('.modal-closeFinalizarDia')
const overlayEnd = document.querySelector('.overlayModalFinalizarDia')
const windowEnd = document.querySelector('.modalFinalizarDia')

const buttonEnd = document.querySelector('.finalizarDia')
modal.openCloseModal(buttonEnd, closeButtonEnd, overlayEnd, windowEnd)
