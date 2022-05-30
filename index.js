const express = require('express'); // importo o express
const router = require('./router') // importo as rotas

const app = express(); // executo
const port = 3000; // defino porta

app.use(express.json()); // trato o JSON
app.use(router); // inicializo o roteador


// --------------------------------------------------------------------------------------------
// Funcionalidade: É, por exemplo o create (app.post) abaixo. É um código que executa algo.

// Regra de Negócio: É quando é definido uma regra para uma funcionalidade, como por exemplo:
// o create (app.post) deve confirmar o email do usuário. Aí sim temos uma regra de negócio.

// Validações: não confunda com regra de negócio! A validação só determina se o dado é real (válido).

// No CONTROLADOR (CONTROLLER) ficarão as Regras de negócio. Cada entidade terá o seu próprio controlador. O que facilita a manipulação dessas regras.
// No ROTEADOR (ROUTER) será feito o gerenciamento das ROTAS. Quando a requisição (req) chega ele decide para qual controlador vai enviar.
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
app.listen(port, ()=> {
    console.log(`O servidor está disponível em http://localhost:${port}`);
})