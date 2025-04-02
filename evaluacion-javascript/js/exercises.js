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
exercises.showExercises(document.querySelector('.divEjercicios'))