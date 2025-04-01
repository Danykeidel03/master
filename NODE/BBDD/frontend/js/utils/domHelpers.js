/**
 * AYUDAS PARA USOS EN EL DOM
 */

import * as apiConfig from "../services/apiConfig.js";


export function openCloseModal(btnAbrir, closeButton, overlay, ventanaModal){
    [btnAbrir,closeButton,overlay].forEach(element => {
        element.addEventListener('click', function() {
            ventanaModal.classList.contains('active') ? ventanaModal.classList.remove('active') : ventanaModal.classList.add('active')
        })
    });
}

export function addToDom(contenedor, product){
    const nombre = product.nombre;
    const precio = product.precio;
    const cod = product.codigoProducto;
    const id = product._id;

    const newHTML = `
        <div class="product-container">
            <div class="product-name">Nombre: ${nombre}</div>
            <div class="product-price">Precio: ${precio}</div>
            <div class="product-code">Código: ${cod}</div>
            <button id="${id}" class="product-button-delete-${id}">Eliminar</button>
        </div>
    `;  
    
    document.querySelector(contenedor).innerHTML += newHTML;

    document.querySelector(`.product-button-delete-${id}`).addEventListener('click', function() {
        const resultDeleteProduct = apiConfig.doFetch(`http://localhost:3000/products/${id}`,'DELETE')
        resultDeleteProduct.then(result => console.log(result))
    });
}