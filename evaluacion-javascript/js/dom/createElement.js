/**
 * SCRIPT PARA AGILIZAR LA CREACION DE ELEMENTOS
 */

export function createNewElement(type, clase, content) {
    let newElement = document.createElement(type);
    newElement.classList.add(clase)
    if (content != '') { newElement.textContent = content }
    return newElement;
}