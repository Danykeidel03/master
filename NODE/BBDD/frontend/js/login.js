/**
 * script de login + jwt + register
 */
import * as apiConfig from "./services/apiConfig.js";

document.querySelector('.btn-register').addEventListener('click', () => {
    const valueName = document.querySelector('.user').value;
    const valuePass = document.querySelector('#passUser').value;

    const body = { nombre: valueName, pass: valuePass };

    const resultRegister = apiConfig.doFetch('http://localhost:3000/register', 'POST', JSON.stringify(body));
    resultRegister.then(result => {
        console.log(result);
    });
});

document.querySelector('.btn-login').addEventListener('click', () => {
    const valueName = document.querySelector('.user').value;
    const valuePass = document.querySelector('#passUser').value;

    const body = { nombre: valueName, pass: valuePass };

    const resultRegister = apiConfig.doFetch('http://localhost:3000/register/login', 'POST', JSON.stringify(body));
    resultRegister.then(result => {
        console.log(result);
    });
});