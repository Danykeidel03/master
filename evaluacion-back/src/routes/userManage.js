const express = require('express')
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController')
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('photo'), userController.resgiterUser)
router.post('/login', userController.loginUser);

module.exports = router;