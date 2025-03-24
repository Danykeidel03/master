/*
    PAGINA PRINCIPAL
*/


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

addName()

function addName(){
    let nombreUser = sessionStorage.getItem('dataUser').split('@')[0]
    console.log(nombreUser);
    document.querySelector('.bienvenidoUser').textContent = nombreUser
}