- **Exercício 1**

  Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.

  _a. Qual método HTTP você deve utilizar para isso?_

  _Método GET_

  _b. Como você indicaria a **entidade** que está sendo manipulada?_

  _("/users")_

  - **Exercício 1**

  Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.

  - Lista de usuários

    ```tsx
    let users = [
      {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12,
      },
      {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36,
      },
      {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21,
      },
      {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17,
      },
      {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17,
      },
      {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60,
      },
    ];
    ```

  **Exercício 2**

  Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham um `type` específico, recebendo um `type` por vez. Após isso, responda:

  _a._ Como você passou os parâmetros de type para a requisição? Por quê?

  type user = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
  }

  _Para restringir os tipos._

  _b._ Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?

  _Utilizando um enum_

  enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
  }

**Exercício 3**

Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário **por nome**.

_a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?_

_Através de query params_

b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

_Done_

- **Exercício 4**

  Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.

  a. Mude o método do endpoint para `PUT`. O que mudou?
  _Criou o usuário do mesmo jeito_

  b. Você considera o método `PUT` apropriado para esta transação? Por quê?
  Não porquê o método PUT é usado para atualizar dados já existentes.

- **Exercício 5**

  Exercicio de PUT

  Vamos **alterar** nosso último usuário. Crie um endpoint com o método `PUT` para alterar o nome do nosso usuário recém criado. Adicione em seu nome o sufixo `-ALTERADO`.

  - **Exercício 6**

  Essa não! Alteramos um dado por engano. Vamos **realterar** nosso último usuário. Crie um endpoint com o método `PATCH` para alterar mais uma vez o nome do nosso usuário recém alterado. Adicione em seu nome o sufixo `-REALTERADO`.

  - **Exercício 7**

  Por fim, vamos remover este usuário de nossa lista. Crie um endpoint que receba um id em seu `path` e utilize-o para removê-lo da lista de usuários.
