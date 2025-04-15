/**
 * SCRIPT PARA EL MANEJO DE ERRORES
 */

export function returnError(message, elementBefore, container, mantener) {
    let divError = document.createElement('div');
    divError.classList.add('divError');
    divError.textContent = message;
    container.insertBefore(divError, elementBefore);
    if(mantener){
        setTimeout(() => {
            document.querySelector(".divError").remove();
        }, 4000);
    }
}