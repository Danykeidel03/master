/*
    SCRIPT DE LOGIN Y SESSION STORAGE
    COMPRUEBA QUE EL USER ESTE LOGUEADO
    ADEMAS GUARDA DATOS EN EL SESSION STORAGE
    VALIDA FORMULARIO
*/

import * as error from "./error.js";

isLogued()
let buttonLogin = document.querySelector('.btn-login')

buttonLogin.addEventListener('click', function() {
    const userMail = document.querySelector('.inputs-login .user').value
    const userPass = document.querySelector('.inputs-login .pass').value
    validateForm(userMail, userPass)
})

function isLogued(){
    const datosUser = sessionStorage.getItem('dataUser')
    datosUser ? console.log('hay') : console.log('no hay');
}

function validateForm(valueUser, valuePass){
    if(valueUser.includes('@') && valueUser.includes('.com')){
        if(valuePass.includes('@') && valuePass.includes('.com')){

        }else{

        }
    }else{
        error.returnError('Debes poner un Mail', buttonLogin, document.querySelector('.form-login'))
    }
}