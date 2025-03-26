//AQUI IRIA LO DE MONGOO (UPDATE, CREATE...)

const Product = require("../models/Product");

async function insertProduct(nombre, descripcion, precio, stock, categoria, marca, codigoProducto, fechaFabricacion, garantiaMeses, peso, dimensiones, alto, ancho, profundidad) {
  try {
    const product = new Product({
      nombre,
      descripcion,
      precio,
      stock,
      categoria,
      marca,
      codigoProducto,
      fechaFabricacion,
      garantiaMeses,
      peso,
      dimensiones,
      alto,
      ancho,
      profundidad,
      esActivo: true,
      fechaCreacion: new Date(),
      ultimaActualizacion: new Date(),
    });
    const res = await product.save();
    console.log("Usuario insertado", res);
    return res;
  } catch (e) {
    console.log("Error:", e);
  }
}

async function getProducts(){
    try{
        const products = await Product.find()
        console.log('Usuarios:', products);
    }catch(e){
        console.log('Error:', e);
    }
}

async function updateProduct(id, userData) {
    try {
        userData.ultimaActualizacion = new Date();
        const product = await Product.findByIdAndUpdate(
            id,
            userData,
            { 
                new: true,
                runValidators: true 
            }
        );

        if (!product) {
            throw new Error('product no encontrado');
        }

        console.log('product actualizado:', product);
        return product;
    } catch (err) {
        console.error('Error al actualizar product:', err);
        throw err;
    }
}

async function deleteProduct(id) {
  try {      
      const product = await Product.findByIdAndDelete(id)
      if (!product) {
          throw new Error('product no encontrado');
      }

      console.log('product actualizado:', product);
      return product;
  } catch (err) {
      console.error('Error al actualizar product:', err);
      throw err;
  }
}


module.exports = { insertProduct, getProducts, updateProduct, deleteProduct };
updateProduct