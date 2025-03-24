/*
    PAGINA PRINCIPAL
*/

import * as modal from "./openModal.js";

addName()

const btnAbrirAdd = document.querySelector('.addTarea')
const closeButtonAdd = document.querySelector('.modal-closeAddTarea')
const overlayAdd = document.querySelector('.overlayModalAddTarea')
const ventanaAdd = document.querySelector('.modalAddTarea')

modal.openCloseModal(btnAbrirAdd,closeButtonAdd,overlayAdd,ventanaAdd)

const datosUser = sessionStorage.getItem('dataUser')
datosUser ? console.log('hay') : window.location.href = 'index.html';

const btnMenu = document.querySelector('.accordionMenu')
btnMenu.addEventListener('click', function(){
    let menuContent = document.querySelector('.menu-content');
    menuContent.classList.contains('active') ? menuContent.classList.remove('active') : menuContent.classList.add('active')
})

const btnLogOut = document.querySelector('.divLogout button')
btnLogOut.addEventListener('click', function(){
    sessionStorage.removeItem('dataUser')
    window.location.href = 'index.html';
})

function addName(){
    let nombreUser = sessionStorage.getItem('dataUser').split('@')[0]
    console.log(nombreUser);
    document.querySelector('.bienvenidoUser').textContent = nombreUser
}