const {
  agregarPedido,
  eliminarPrimerPedido,
  contarPedidos,
  encontrarPedidos,
  returnPlatillos,
  encontrarPlatos,
} = require("./functions.js");

agregarPedido('Daniel','Sopa')
console.log(contarPedidos())

// Uncaught ReferenceError: require is not defined