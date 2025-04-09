const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController')
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/', authMiddleware.verificarToken, productController.createProduct)
router.get('/', authMiddleware.verificarToken, productController.getProduct)
router.put('/:id', authMiddleware.verificarToken, productController.updateProduct)
router.delete('/:id', authMiddleware.verificarToken, authMiddleware.verificarRol(['superadmin']) , productController.deleteProduct)


module.exports = router;