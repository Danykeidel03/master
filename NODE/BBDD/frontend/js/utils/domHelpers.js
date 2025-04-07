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
        <div class="product-container" id="product-${id}">
            <div class="product-name">Nombre: ${nombre}</div>
            <div class="product-price">Precio: ${precio}</div>
            <div class="product-code">Código: ${cod}</div>
            <button class="product-button-delete">Eliminar</button>
        </div>
    `;  
    
    const container = document.querySelector(contenedor);
    container.insertAdjacentHTML('beforeend', newHTML);

    const currentProduct = document.querySelector(`#product-${id}`);
    const deleteButton = currentProduct.querySelector('.product-button-delete');

    deleteButton.addEventListener('click', function() {
        const resultDeleteProduct = apiConfig.doFetch(`http://localhost:3000/products/${id}`, 'DELETE');
        resultDeleteProduct.then(result => {
            console.log(result);
            alert(`Producto eliminado: ${result.id}`)
            currentProduct.remove(); // Eliminar del DOM después de borrarlo del backend
        });
    });
}