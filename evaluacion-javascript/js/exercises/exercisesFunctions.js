/**
 * SCRIPT MANEJO EJERCICIOS
 */

import * as modal from "../dom/openModal.js";

export function toAddExercise() {
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
}

export function toAddExerciseCustom(nombre, image){
    
}

function seeExercises(id) {
    getExerciseds(id).then(data => data.forEach(element => {
        let objEjercicio = {
            nombre: element.name,
            instrucciones: element.instructions.join(","),
        }
        traduirTexts(objEjercicio).then(traducciones => {
            let datos = traducciones.data
            printExercises(datos, element.gifUrl)
        })
    }));
}

function printExercises(ejercicio, gif) {
    let divExercises = document.querySelector('.divAddEjercicios')
    let divPrincipalAddExercise = createNewElement('div', 'divAddExercise', '')

    //Div imagen
    let divPhotoAddExerciseDiv = createNewElement('div', 'divPhotoExercise', '')

    let divPhotoAddExerciseImg = createNewElement('img', 'imgPhotoExercise', '')
    divPhotoAddExerciseImg.setAttribute('src', gif)
    divPhotoAddExerciseImg.setAttribute('alt', 'gif-exercise')

    divPhotoAddExerciseDiv.appendChild(divPhotoAddExerciseImg)

    //Div contenido
    let divContentAddExerciseDiv = createNewElement('div', 'divContentExercise', '')
    let spanNameExercise = createNewElement('span', 'nameExercise', ejercicio[0].translation)
    let divNameInstructions = createNewElement('div', 'nameInstructions', ejercicio[1].translation)
    let buttonAdd = createNewElement('button', 'addButton', '+')
    buttonAdd.onclick = () => addExercise(ejercicio[0].translation, gif)
    //buttonAdd.setAttribute('onclick', `addExercise('${ejercicio[0].translation}', '${gif}')`)

    divNameInstructions.appendChild(buttonAdd)
    divContentAddExerciseDiv.appendChild(spanNameExercise)
    divContentAddExerciseDiv.appendChild(divNameInstructions)

    //div generico
    divPrincipalAddExercise.appendChild(divPhotoAddExerciseDiv)
    divPrincipalAddExercise.appendChild(divContentAddExerciseDiv)

    divExercises.appendChild(divPrincipalAddExercise)
}

function createNewElement(type, clase, content) {
    let newElement = document.createElement(type);
    newElement.classList.add(clase)
    if (content != '') { newElement.textContent = content }
    return newElement;
}

async function getExerciseds(partBody) {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${partBody}?limit=1&offset=0`;
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
    const url = 'https://traducciones.mtda.es/api/traducir';
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify({
        "idioma": "es_ES",
        "textos": [
            {
                "nombre": textTraducir.nombre,
                "id": 1,
                "instrucciones": textTraducir.instrucciones
            }
        ],
        "formalidad": "prefer_more"
    })

    const opcionesRequeridas = {
        method: "POST",
        headers: headers,
        body: body,
        redirect: "follow"
    }
    const response = await fetch(url, opcionesRequeridas)
    const result = await response.json()
    return (result);
}

function addExercise(infoName, infoGif) {
    let arrayObjExercises = []
    if (localStorage.getItem(`ejercicios-${sessionStorage.getItem('dataUser')}`)) {
        const ejercicios = JSON.parse(localStorage.getItem(`ejercicios-${sessionStorage.getItem('dataUser')}`));
        ejercicios[1].push({ nombreEjercicio: infoName, giftEjercicio: infoGif })
        arrayObjExercises = ejercicios[1]
        localStorage.removeItem(`ejercicios-${sessionStorage.getItem('dataUser')}`)
    } else {
        arrayObjExercises = [{ nombreEjercicio: infoName, giftEjercicio: infoGif }]
    }
    const objEjercicios = [
        sessionStorage.getItem('dataUser'),
        arrayObjExercises
    ];
    localStorage.setItem(`ejercicios-${sessionStorage.getItem('dataUser')}`, JSON.stringify(objEjercicios))
}