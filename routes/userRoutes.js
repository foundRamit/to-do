const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController')

router.get('/', userController.getAllTasks);

router.get('/:id', userController.getATask);

router.post('/' , userController.makeATask);

router.delete('/:id' , userController.deleteTask);

router.patch('/:id', userController.updateTask);


module.exports = router;