const express = require ("express");
const router = express.Router();
const userController = require("./controllers/userController")

// ROTAS:
router.get('/users/:id' , userController.getUserById); //READ (get de um usuário específico):
router.post('/users', userController.createUser); //CREATE(post):

module.exports = router;