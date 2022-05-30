# NodeJS-ControllerRouter
 Curso Tera - Criando rotas, regras de negocio, validações, controlador e roteador
 Neste código criamos o controlador que é puxado pelo roteador e este está sendo usado pela aplicação.
 APLICAÇÃO -> ROTEADOR -> CONTROLADOR

_____

Regras de negócio:

Exemplo 1:
Quando um aluno de uma determinada plataforma educacional se cadastrar numa matéria (funcionalidade), ele deve possuir um e-mail com o domínio @nomedaescola.com.br (regra de negócios).

Exemplo 2:
Um outro exemplo seria uma aplicação bancária que determina que apenas clientes com mais de 30 anos de idade podem ter acesso a determinado produto financeiro. A instrução explícita em código de que a funcionalidade precisa realizar uma validação da idade desse cliente é uma regra de negócios.
_____

Validações:
Validações são um jeito de avaliar se determinado dado é válido e correto (um e-mail é um e-mail, um telefone é um telefone, etc).
_____

Controlador e Roteador:
É a parte responsável pela gestão da lógica do nosso código. Cada entidade vai ter um controlador, dessa maneira, se eu quiser adicionar ou modificar alguma coisa no usuário, por exemplo, basta abrir o controlador de usuários. Todas as funções relacionadas ao usuário ficarão lá.