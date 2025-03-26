/*
    PAGINA PRINCIPAL
*/

import * as modal from "./openModal.js";

const datosUser = sessionStorage.getItem('dataUser')
datosUser ? console.log('hay') : window.location.href = 'index.html';

addName()

const buttonEspalda = document.querySelector('.ejercicioEspalda')
const buttonPecho = document.querySelector('.ejercicioPecho')
const buttonHombro = document.querySelector('.ejercicioHombro')
const buttoPierna = document.querySelector('.ejercicioPierna')
const buttonBiceps = document.querySelector('.ejercicioBiceps')
const buttonCardio = document.querySelector('.ejercicioCardio')

console.log(buttonCardio);

[buttoPierna, buttonBiceps, buttonEspalda, buttonHombro, buttonPecho, buttonCardio].forEach(buttonFinal => {
    buttonFinal.addEventListener('click', () => { seeExercises(buttonFinal.id) })
});

//hacer funcion sacar ejercicios

const btnAbrirAdd = document.querySelector('.addTarea')
const closeButtonAdd = document.querySelector('.modal-closeAddTarea')
const overlayAdd = document.querySelector('.overlayModalAddTarea')
const ventanaAdd = document.querySelector('.modalAddTarea')

modal.openCloseModal(btnAbrirAdd, closeButtonAdd, overlayAdd, ventanaAdd)

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

function seeExercises(id) {
    getExerciseds(id).then(data => data.forEach(element => {
        console.log(element)
        console.log(traduirTexts(element))
    }));
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

async function traduirTexts(textTraducir) {
    
}