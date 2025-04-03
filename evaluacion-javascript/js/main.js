/*
    PAGINA PRINCIPAL
*/

import * as user from "./user/userFunctions.js";
import * as exercises from "./exercises/exercisesFunctions.js";
import * as openCloseMenu from "./dom/openCloseMenu.js";


exercises.toAddExercise()
user.lookUser()
user.addName()
openCloseMenu.openCloseMenu()
user.logOut()
exercises.customExercise()