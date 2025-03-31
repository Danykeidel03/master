export function returnError(message, elementBefore, container) {
    let divError = document.createElement('div');
    divError.classList.add('divError');
    divError.textContent = message;
    container.insertBefore(divError, elementBefore);
    setTimeout(() => {
        document.querySelector(".divError").remove();
    }, 3000);
}