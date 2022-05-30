const express = require('express'); // importo
const { send } = require('process');
const app = express(); // executo
const port = 3000; // defino porta
app.use(express.json()); // trato o JSON


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

// --------------------------------------------------------------------------------------------
// Funcionalidade: É, por exemplo o create (app.post) abaixo. É um código que executa algo.

// Regra de Negócio: É quando é definido uma regra para uma funcionalidade, como por exemplo:
// o create (app.post) deve confirmar o email do usuário. Aí sim temos uma regra de negócio.

// Validações: não confunda com regra de negócio! A validação só determina se o dado é real (válido).
// --------------------------------------------------------------------------------------------


//READ (get de um usuário específico):
app.get('/users/:id' , (req, res) => {
    let user = FAKE_USERS_DATABASE[req.params.id];    
    res.send(user);
}); 

//CREATE(post):
app.post('/users', (req, res) => {
    const newUser = req.body;
    FAKE_USERS_DATABASE.push(newUser);
    res.status(201).send(newUser);
});



// --------------------------------------------------------------------------------------------
app.listen(port, ()=> {
    console.log(`O servidor está disponível em http://localhost:${port}`);
})