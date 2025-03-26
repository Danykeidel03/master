const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.getUserController)

router.post('/new' , userController.createUser)

router.get('/search' , userController.searchUser)

module.exports = router;