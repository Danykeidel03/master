/*
    SCRIPT DE LOGIN Y SESSION STORAGE
    COMPRUEBA QUE EL USER ESTE LOGUEADO
    ADEMAS GUARDA DATOS EN EL SESSION STORAGE
    VALIDA FORMULARIO
*/

import * as error from "./error.js";

let buttonLogin = document.querySelector('.btn-login')

buttonLogin.addEventListener('click', function () {
    const userMail = document.querySelector('.inputs-login .user').value
    const userPass = document.querySelector('.inputs-login .pass').value
    if (validateForm(userMail, userPass)) {
        sessionStorage.setItem('dataUser', userMail)
        isLogued()
    }
})

export function isLogued() {
    const datosUser = sessionStorage.getItem('dataUser')
    datosUser ? window.location.href = 'main.html' : console.log('no hay');
}

function validateForm(valueUser, valuePass) {
    let valicacion = false
    if (valueUser.includes('@') && valueUser.includes('.com')) {
        if (valuePass.length > 6) {
            valicacion = true
        } else {
            error.returnError('Contraseña Poco Segura', buttonLogin, document.querySelector('.form-login'))
        }
    } else {
        error.returnError('Debes poner un Mail', buttonLogin, document.querySelector('.form-login'))
    }
    return valicacion
}