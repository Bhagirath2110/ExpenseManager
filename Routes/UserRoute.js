const router = require('express').Router();
const userController = require('../Controllers/UserController');
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.post('/user', userController.addUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.post('/user/login',userController.loginUser);

module.exports = router;