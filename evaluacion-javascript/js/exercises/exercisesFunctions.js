/**
 * SCRIPT MANEJO EJERCICIOS
 */

import * as modal from "../dom/openModal.js";
import * as createNewElement from "../dom/createElement.js";

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

export function toAddExerciseCustom(){
    //hacer funcion sacar ejercicios
    const nombreExercise = document.querySelector('.nombreEjercicio').value
    const urlExercise = document.querySelector('.urlEjercicio').value
    addExercise(nombreExercise,urlExercise)
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
    let divPrincipalAddExercise = createNewElement.createNewElement('div', 'divAddExercise', '')

    //Div imagen
    let divPhotoAddExerciseDiv = createNewElement.createNewElement('div', 'divPhotoExercise', '')

    let divPhotoAddExerciseImg = createNewElement.createNewElement('img', 'imgPhotoExercise', '')
    divPhotoAddExerciseImg.setAttribute('src', gif)
    divPhotoAddExerciseImg.setAttribute('alt', 'gif-exercise')

    divPhotoAddExerciseDiv.appendChild(divPhotoAddExerciseImg)

    //Div contenido
    let divContentAddExerciseDiv = createNewElement.createNewElement('div', 'divContentExercise', '')
    let spanNameExercise = createNewElement.createNewElement('span', 'nameExercise', ejercicio[0].translation)
    let divNameInstructions = createNewElement.createNewElement('div', 'nameInstructions', ejercicio[1].translation)
    let buttonAdd = createNewElement.createNewElement('button', 'addButton', '+')
    buttonAdd.onclick = () => addExercise(ejercicio[0].translation, gif)

    divNameInstructions.appendChild(buttonAdd)
    divContentAddExerciseDiv.appendChild(spanNameExercise)
    divContentAddExerciseDiv.appendChild(divNameInstructions)

    //div generico
    divPrincipalAddExercise.appendChild(divPhotoAddExerciseDiv)
    divPrincipalAddExercise.appendChild(divContentAddExerciseDiv)

    divExercises.appendChild(divPrincipalAddExercise)
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

export function showExercises(divContainer) {
    if (localStorage.getItem(`ejercicios-${sessionStorage.getItem('dataUser')}`)) {
        let exercises = JSON.parse(localStorage.getItem(`ejercicios-${sessionStorage.getItem('dataUser')}`));
        exercises[1].forEach(element => {
            const containerExercises = createNewElement.createNewElement('div', 'ejercicio', '')
            const exerciseContainer = createNewElement.createNewElement('div', 'ejercicio-individual-general', '')
            const exerciseName = createNewElement.createNewElement('div', 'ejercicio-individual-nombre', element.nombreEjercicio)
            const exerciseFoto = createNewElement.createNewElement('img', 'ejercicio-individual-foto', '')
            exerciseFoto.setAttribute('src', element.giftEjercicio)
            exerciseFoto.setAttribute('alt', 'gif-exercise')
            const buttonAdd = createNewElement.createNewElement('button', 'endExerciseButton', 'Finalizar')
            buttonAdd.onclick = () => endExercise(element.nombreEjercicio)
            exerciseContainer.appendChild(buttonAdd)
            exerciseContainer.appendChild(exerciseName)
            containerExercises.appendChild(exerciseContainer)
            containerExercises.appendChild(exerciseFoto)
            divContainer.appendChild(containerExercises)
        });
    }
}

function endExercise(nombre) {
    let arrayObjExercisesEnded = []
    if (localStorage.getItem(`ejerciciosFinalizados-${sessionStorage.getItem('dataUser')}`)) {
        const ejerciciosFinalizados = JSON.parse(localStorage.getItem(`ejerciciosFinalizados-${sessionStorage.getItem('dataUser')}`));
        console.log(ejerciciosFinalizados[1]);
        ejerciciosFinalizados[1].push({ nombreEjercicio: nombre })
        arrayObjExercisesEnded = ejerciciosFinalizados[1]
        localStorage.removeItem(`ejerciciosFinalizados-${sessionStorage.getItem('dataUser')}`)
    } else {
        arrayObjExercisesEnded = [{ nombreEjercicio: nombre }]
    }

    const ejercicios = JSON.parse(localStorage.getItem(`ejercicios-${sessionStorage.getItem('dataUser')}`));
    const arrayObjExercises = ejercicios[1].filter(item => item.nombreEjercicio !== nombre)
    const objEjercicios = [
        sessionStorage.getItem('dataUser'),
        arrayObjExercises
    ];
    
    const objEjerciciosFinalizados = [
        sessionStorage.getItem('dataUser'),
        arrayObjExercisesEnded
    ];
    localStorage.setItem(`ejerciciosFinalizados-${sessionStorage.getItem('dataUser')}`, JSON.stringify(objEjerciciosFinalizados))
    localStorage.setItem(`ejercicios-${sessionStorage.getItem('dataUser')}`, JSON.stringify(objEjercicios))
}