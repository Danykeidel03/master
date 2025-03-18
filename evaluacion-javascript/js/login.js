/*
    SCRIPT DE LOGIN Y SESSION STORAGE
    COMPRUEBA QUE EL USER ESTE LOGUEADO
    ADEMAS GUARDA DATOS EN EL SESSION STORAGE
    VALIDA FORMULARIO
*/

isLogued()

function isLogued(){
    const datosUser = sessionStorage.getItem('dataUser')
    datosUser ? console.log('hay') : console.log('no hay');
}

function validateForm(valueUser, valuePass){
    
}