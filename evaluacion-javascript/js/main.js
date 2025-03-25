/*
    PAGINA PRINCIPAL
*/

import * as modal from "./openModal.js";

addName()
//getExerciseds().then(data => console.log(data))

const buttonEspalda = document.querySelector('.ejercicioEspalda')
const buttonPecho = document.querySelector('.ejercicioPecho')
const buttonHombro = document.querySelector('.ejercicioHombro')
const buttoPierna = document.querySelector('.ejerciciPierna')
const buttonBiceps = document.querySelector('.ejercicioBiceps')
const buttonTriceps = document.querySelector('.ejercicioTriceps')

//hacer funcion sacar ejercicios

const btnAbrirAdd = document.querySelector('.addTarea')
const closeButtonAdd = document.querySelector('.modal-closeAddTarea')
const overlayAdd = document.querySelector('.overlayModalAddTarea')
const ventanaAdd = document.querySelector('.modalAddTarea')

modal.openCloseModal(btnAbrirAdd, closeButtonAdd, overlayAdd, ventanaAdd)

const datosUser = sessionStorage.getItem('dataUser')
datosUser ? console.log('hay') : window.location.href = 'index.html';

const btnMenu = document.querySelector('.accordionMenu')
btnMenu.addEventListener('click', function () {
    let menuContent = document.querySelector('.menu-content');
    menuContent.classList.contains('active') ? menuContent.classList.remove('active') : menuContent.classList.add('active')
})

const btnLogOut = document.querySelector('.divLogout button')
btnLogOut.addEventListener('click', function () {
    sessionStorage.removeItem('dataUser')
    window.location.href = 'index.html';
})

function addName() {
    let nombreUser = sessionStorage.getItem('dataUser').split('@')[0]
    console.log(nombreUser);
    document.querySelector('.bienvenidoUser').textContent = nombreUser
}

async function getExerciseds(partBody) {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${partBody}?limit=10&offset=0`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c1ec2215b4mshc36c7f886fc0446p1e0b2ejsn20d09b5f6d4b',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error);
    }
}