/**
 * SCRIPT PÀRA EL USER
 */

import * as error from "../dom/error.js";

export function addName() {
    if (sessionStorage.getItem('dataUser')) {
        let nombreUser = sessionStorage.getItem('dataUser').split('@')[0]
        document.querySelector('.bienvenidoUser').textContent = nombreUser
        document.querySelector('.loginDiv').classList.add('remove')
    } else {
        const logoLogin = document.querySelector('.loginDiv');
        const loginForm = document.querySelector('.divLoginForm')
        const loginFormImage = document.querySelector('.imageLogin')
        logoLogin.classList.add('active')
        loginFormImage.addEventListener('click', () => {
            loginForm.classList.contains('active') ? loginForm.classList.remove('active') : loginForm.classList.add('active');
        })
    }
}

export function samePassword() {
    document.querySelector('#passSecond').addEventListener('keyup', function () {
        if (document.querySelector('.divError')) { document.querySelector('.divError').remove() }
        const password = document.querySelector('#passSecond');
        const pass = document.querySelector('#pass');
        const button = document.querySelector('.btnRegister');

        if (password.value !== pass.value) {
            password.parentElement.classList.add('invalid');
            error.returnError('Las contraseñas deben coincidir', password, document.querySelector('.invalid'), false)
            button.disabled = true;
        } else {
            password.parentElement.classList.remove('invalid');
            button.disabled = false;
        }
    })
}

export function logOut() {
    const btnLogOut = document.querySelector('.divLogout button')
    btnLogOut.addEventListener('click', function () {
        sessionStorage.removeItem('dataUser')
        window.location.href = 'index.html';
    })
}

export async function registerUser() {
    const photoUser = document.querySelector('#filePhoto')
    const nameUser = document.querySelector('#name')
    const mailUser = document.querySelector('#mail')
    const weightUser = document.querySelector('#weight')
    const heightUser = document.querySelector('#height')
    const activityUser = document.querySelector('#activity')
    const passUser = document.querySelector('#passSecond')

    if(validatePassword(passUser)){
        const formData = new FormData()
        formData.append('name', nameUser.value)
        formData.append('mail', mailUser.value)
        formData.append('role', 'usuario')
        formData.append('photo', photoUser.files[0])
        formData.append('weight', weightUser.value)
        formData.append('height', heightUser.value)
        formData.append('activity', activityUser.value)
        formData.append('pass', passUser.value)
    
        try {
            const response = await fetch('http://localhost:3000/user', {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                console.log('usuario Registrado');
            } else {
                throw new Error('Error al subir los archivos');
            }
        } catch (error) {
            console.log(error);
        }
    }else{
        error.returnError('Las contraseña debe tener entre 6 y 20 caracteres, al menos un numero, una mayúscula y una minúscula', document.querySelector('.btnRegister'), document.querySelector('.divConfirm div'), false)
    }
}

function validatePassword(password) {
    let resultado = false
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    password.value.match(passw) ? resultado = true : resultado = false;
    return resultado
}