/*
    PAGINA PRINCIPAL
*/

import * as user from "./user/userFunctions.js";
import * as exercises from "./exercises/exercisesFunctions.js";
import * as openCloseMenu from "./dom/openCloseMenu.js";
import * as navigation from "./navigation/navigation.js";


exercises.toAddExercise()
user.addName()
openCloseMenu.openCloseMenu()
user.logOut()
exercises.customExercise()
navigation.coordsUser()
document.querySelector('.btnRegister').addEventListener('click', ()=>{
    user.registerUser()
})
user.samePassword()