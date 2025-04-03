/**
 * SCRIPT PÀRA EL USER
 */

export function lookUser() {
    const datosUser = sessionStorage.getItem('dataUser')
    datosUser ? console.log('hay') : window.location.href = 'index.html';
}
export function addName() {
    let nombreUser = sessionStorage.getItem('dataUser').split('@')[0]
    document.querySelector('.bienvenidoUser').textContent = nombreUser
}

export function logOut() {
    const btnLogOut = document.querySelector('.divLogout button')
    btnLogOut.addEventListener('click', function () {
        sessionStorage.removeItem('dataUser')
        window.location.href = 'index.html';
    })
}