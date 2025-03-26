//AQUI VAN EL SCHEMA DE USUSARIO
const mongose = require('mongoose')

const productSchema = new mongose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
        min: [0, 'El saldo no puede ser negativo'],
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'El saldo no puede ser negativo'],
    },
    categoria: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    codigoProducto: {
        type: String,
        required: true,
        unique: true,
    },
    fechaFabricacion: {
        type: Date,
        required: true,
    },
    garantiaMeses: {
        type: Number,
        required: true,
        min: [0, 'El saldo no puede ser negativo'],
    },
    peso: {
        type: Number,
        required: true,
        min: [0, 'El saldo no puede ser negativo'],
    },
    dimensiones: {
        type: Object,
        required: true,
    },
    alto: {
        type: Number,
        required: true,
        min: [0, 'El saldo no puede ser negativo'],
    },
    ancho: {
        type: Number,
        required: true,
        min: [0, 'El saldo no puede ser negativo'],
    },
    profundidad: {
        type: Number,
        required: true,
        min: [0, 'El saldo no puede ser negativo'],
    },
    coloresDisponibles: {
        type: [Number],
        required: false,
    },
    etiquetas: {
        type: [Number],
        required: false,
    },
    imagenes: {
        type: [Number],
        required: false,
    },
    esActivo: {
        type: Boolean,
        required: true,
        default: Date.now,
    },
    fechaCreacion: {
        type: Date,
        required: true,
        default: Date.now,
    },
    ultimaActualizacion: {
        type: Date,
        required: true,
        default: Date.now,
    },

})


const Product = mongose.model('Product', productSchema)

module.exports = Product