/**
 * JAVASCRIPT PRINCIPAL
 */

import * as apiConfig from "./services/apiConfig.js";
import * as error from "./services/errorService.js";
import * as domUso from "./utils/domHelpers.js";

const btnOpenAddProduct = document.querySelector('.addProductos')
const modalAddProdut = document.querySelector('.modalAddProduct')
const closeAddProdut = document.querySelector('.modal-closeAddProductos')
const overlayAddProduct = document.querySelector('.overlayModalAddProductos')

domUso.openCloseModal(btnOpenAddProduct,closeAddProdut,overlayAddProduct,modalAddProdut)

const btnAddProduct = document.querySelector('.btnAddProduct')
btnAddProduct.addEventListener('click', function(){
    const valores = {
        nombre: document.getElementById("nombre").value,
        descripcion: document.getElementById("descripcion").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value,
        categoria: document.getElementById("categoria").value,
        marca: document.getElementById("marca").value,
        codigoProducto: document.getElementById("codigoProducto").value,
        fechaFabricacion: document.getElementById("fechaFabricacion").value,
        garantiaMeses: document.getElementById("garantiaMeses").value,
        peso: document.getElementById("peso").value,
        dimensiones: document.getElementById("dimensiones").value,
        alto: document.getElementById("alto").value,
        ancho: document.getElementById("ancho").value,
        profundidad: document.getElementById("profundidad").value
    };
    const resultAddProduct = apiConfig.doFetch('http://localhost:3000/products','POST', JSON.stringify(valores))
    resultAddProduct.then(result => {console.log(result)})
})

const btnMostrarProductos = document.querySelector('.verProductos');
btnMostrarProductos.addEventListener('click', function(){
    const resultAddProduct = apiConfig.doFetch('http://localhost:3000/products','GET')
    resultAddProduct.then(result => result.forEach(element => {
      console.log(element)  
      domUso.addToDom('.divListadoUsers', element)
    }))
})