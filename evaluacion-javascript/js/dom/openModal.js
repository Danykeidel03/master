/**
 * SCRIPT PARA LAS VENTANAS MODALES
 */

export function openCloseModal(btnAbrir, closeButton, overlay, ventanaModal) {
    [btnAbrir, closeButton, overlay].forEach(element => {
        element.addEventListener('click', function () {
            ventanaModal.classList.contains('active') ? ventanaModal.classList.remove('active') : ventanaModal.classList.add('active');
        })
    });
}