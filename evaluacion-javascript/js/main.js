/*
    PAGINA PRINCIPAL
*/

const btnMenu = document.querySelector('.accordionMenu')
btnMenu.addEventListener('click', function(){
    let menuContent = document.querySelector('.menu-content');
    menuContent.classList.contains('active') ? menuContent.classList.remove('active') : menuContent.classList.add('active')
})

addName()

function addName(){
    let nombreUser = sessionStorage.getItem('dataUser').split('@')[0]
    console.log(nombreUser);
    document.querySelector('.bienvenidoUser').textContent = nombreUser
}