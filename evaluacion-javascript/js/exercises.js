/**
 * JS PARA LA PAGINA DE EJERCICIOS
 */

import * as exercises from "./exercises/exercisesFunctions.js";
import * as openCloseMenu from "./dom/openCloseMenu.js";
import * as user from "./user/userFunctions.js";
import * as createNewElement from "./dom/createElement.js";

user.lookUser()
user.addName()
user.logOut()
exercises.toAddExercise()
openCloseMenu.openCloseMenu()

showExercises(document.querySelector('.divEjercicios'))

function showExercises(divContainer) {
    if (localStorage.getItem(`ejercicios-${sessionStorage.getItem('dataUser')}`)) {
        let exercises = JSON.parse(localStorage.getItem(`ejercicios-${sessionStorage.getItem('dataUser')}`));
        exercises[1].forEach(element => {
            console.log(element);
            const containerExercises = createNewElement.createNewElement('div', 'ejercicio', '')
            const exerciseName = createNewElement.createNewElement('div', 'ejercicio-individual-nombre', element.nombreEjercicio)
            const exerciseFoto = createNewElement.createNewElement('img', 'ejercicio-individual-foto', '')
            exerciseFoto.setAttribute('src', element.giftEjercicio)
            exerciseFoto.setAttribute('alt', 'gif-exercise')
            containerExercises.appendChild(exerciseName)
            containerExercises.appendChild(exerciseFoto)
            divContainer.appendChild(containerExercises)
        });
    }
}