/**
 * SCRIPT PARA EL MENU LATERAL
 */

export function openCloseMenu() {
    const btnMenu = document.querySelector('.accordionMenu')
    btnMenu.addEventListener('click', function () {
        let menuContent = document.querySelector('.menu-content');
        menuContent.classList.contains('active') ? menuContent.classList.remove('active') : menuContent.classList.add('active')
    })
}