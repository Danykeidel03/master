const express = require('express')
const router = express.Router();
const registerController = require('../controllers/registerController')

router.post('/', registerController.resgiterUser)

router.post('/login', registerController.loginUser);
  
module.exports = router;