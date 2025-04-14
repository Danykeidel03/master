/**
 * SCRIPT PÀRA EL USER
 */


export function addName() {
    if(sessionStorage.getItem('dataUser')){
        let nombreUser = sessionStorage.getItem('dataUser').split('@')[0]
        document.querySelector('.bienvenidoUser').textContent = nombreUser
        document.querySelector('.loginDiv').classList.add('remove')
    }else{
        const logoLogin = document.querySelector('.loginDiv');
        const loginForm = document.querySelector('.divLoginForm')
        const loginFormImage = document.querySelector('.imageLogin')
        logoLogin.classList.add('active')
        loginFormImage.addEventListener('click', () => {
            loginForm.classList.contains('active') ? loginForm.classList.remove('active') : loginForm.classList.add('active');
        })
    }
}

export function logOut() {
    const btnLogOut = document.querySelector('.divLogout button')
    btnLogOut.addEventListener('click', function () {
        sessionStorage.removeItem('dataUser')
        window.location.href = 'index.html';
    })
}