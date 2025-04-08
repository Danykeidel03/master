// IMPORTACION DE SERVICIOS

const { insertProduct, getProducts, updateProduct, deleteProduct } = require("../services/productServices");
const createProductValidators = require("../validations/productValidator");

const productController = {
  createProduct: [
    ...createProductValidators,
    async (request, response) => {
      try {
        const {
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
        } = request.body;
        const data = await insertProduct(
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
          profundidad
        );
        response.status(201).json(data);
      } catch (e) {
        console.log("Error al pillar producto de BBDD", e);
      }
    },
  ],
  getProduct: [
    
    async (req, response) => {
      try {
        const data = await getProducts();
        response.status(200).json(data);
      } catch (e) {
        console.log("Error al pillar usuario de BBDD", e);
      }
    },
  ],
  updateProduct: [
    async (req, response) => {
      try {
        const { id } = req.params;
        const userData = req.body;
        const updatedUser = await updateProduct(id, userData);
        response.status(204).json(updatedUser);
      } catch (e) {
        console.log("Error al actualizar usuario", e);
        response.status(500).json({ error: "Error al actualizar usuario" });
      }
    },
  ],

  deleteProduct: [
    async (req, res) => {
      try {
        const { id } = req.params;
        const deletedProduct = await deleteProduct(id);
  
        // Devuelve el ID del producto eliminado
        res.status(200).json({ id: deletedProduct._id });
      } catch (e) {
        console.error("Error al eliminar producto", e);
        res.status(500).json({ error: "Error al eliminar producto" });
      }
    },
  ],
  
};

module.exports = productController;
