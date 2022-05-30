const userController = {}; // Objeto que contém todos os métodos do nosso controlador


// Crio usuários fake:
const USUARIO_EXEMPLO_1 = {
    nome: 'José',
    sobrenome: 'Silva'
}
const USUARIO_EXEMPLO_2 = {
    nome: 'Maria',
    sobrenome: 'Silva'
}

// Crio array de usuários fake:
const FAKE_USERS_DATABASE = [USUARIO_EXEMPLO_1, USUARIO_EXEMPLO_2];


// MÉTODOS:

// 1- Pegar usuário por ID:
userController.getUserById = (req, res) => {
    let user = FAKE_USERS_DATABASE[req.params.id];    
    res.send(user);
}

// 2- Criar usuários:
userController.createUser = (req, res) => {
    const newUser = req.body;
    FAKE_USERS_DATABASE.push(newUser);
    res.status(201).send(newUser);
}

module.exports = userController; // exporta o controlador para ser usado no roteador