- Exercício 1

  Vamos começar vendo um pouco do knex. Depois de toda a configuração, podemos usar a variável `connection` para fazer _queries_ no banco.

  Abaixo, estamos pegando o Actor com o id `001`

  ```tsx
  const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);
    return result[0][0];
  };
  ```

  Perceba algumas coisas importantes nesse código: o uso da template string para acessar a variável que a função recebe; o jeito com que o valor é retornado: `result[0][0]`. Isso acontece porque uma _query_ feita com o `raw` devolve exatamente o que o banco MySQL devolveu.

  Utilize os _raws_ para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

  _a. Explique como é a resposta que temos quando usamos o `raw`._
  _Temos o retorno do que foi solicitado na função e os metadados da tabela_

  _b. Faça uma função que busque um ator pelo nome;_

  ```tsx
  const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `);
    return result[0][0];
  };
  ```

  ```tsx
  const getActorByNameWithQueryBuilder = async (name: string): Promise<any> => {
   const result = await connection
   .select("*")
   .from("actor")
   .where("name" = "${name}")
   `);

   console.log(result);
   return result;
  };
  ```

  _c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`._

  ```tsx
  const getCountgender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
  `);
    const count = result[0][0].count;

    return count;
  };
  ```

  ```tsx
  const getCountgenderWithQueryBuilder = async (gender: string): Promise<any> => {
   const result = await connection
   .select count(*)
   .from("actor")
   .where("gender" = "${gender}")
   `);

      console.log(result);
   return result;
  ```

  - Exercício 2

    Agora vamos treinar um pouco os _queries builders_. Eles são uma forma mais simples de fazer requisições que já tratam as respostas e as queries usando elementos diretamente do Javascript (objetos e arrays). Abaixo, há uma query que cria um ator:

    ```tsx
    const createActor = async (
      id: string,
      name: string,
      salary: number,
      dateOfBirth: Date,
      gender: string
    ): Promise<void> => {
      await connection
        .insert({
          id: id,
          name: name,
          salary: salary,
          birth_date: dateOfBirth,
          gender: gender,
        })
        .into("Actor");
    };
    ```

    Podemos mandar um objeto javascript diretamente que o knex vai criar a query para nós. Perceba só que temos sempre que colocar como **chaves** do objeto os nomes das **colunas** que estão nas tabelas (como fizemos com `birth_date`).

    Existem várias funções que podemos encadear: `update()`, `delete()`, `set()`, `select()`, `from()`, `avg()`, `count()` e muito outras. Pesquise na internet se tiver dúvida em qual usar!

    Utilize os _queries builders_ para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

    _a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão_

  ```tsx
    const updateSalary = async (salary: number, id: string): Promise<any> => {
        const result = await connecition("Actor")
        .update({
        salary: salary
        })
        .where("id", id);
    };

    _b. Uma função que receba um id e delete um ator da tabela_

    const deleteActor = async (id: string): Promise<void> => {
        const result = await connecition("Actor")
        .delete()
        .where("id", id);
    };

    _c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`_

    const avgSalaries = async (gender: string): Promise<any> => {
      const result = await connecition("Actor")
        .avg("salary" as "average")
          .where({ gender })
          .where("id", id);

          return result[0].average
      };
  ```

- Exercício 3

  Está na hora de começar a criar alguns endpoints. O mais simples de todos talvez seja o de pegar o ator pelo `id`. Queremos criar um método GET que receba como _path param_ o _id_ do ator cujas informações queremos pegar. Para isso, devemos:

  - Usar a função `get` do express
  - Definir o _path param_ com a **chave id: `/actor/:id`.** Dessa forma, poderemos acessar o endpoint assim: `http://localhost:3000/user/id-do-usuario`

  a. Crie um endpoint com as especificações acima

  ```tsx
  export async function getActorById(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const actor = await dbSelectActorById(request.params.id);
      if (!actor) {
        response.status(404).send({
          message: "Ator não encontrado!",
        });
        return;
      }
      response.status(200).send({
        id: actor.id,
      });
    } catch (error) {
      response.status(404).send({
        message: error.message || error.sqlMessage,
      });
    }
  }
  ```

  b. Crie um endpoint agora com as seguintes especificações:

  - Deve ser um GET (`/actor`)
  - Receber o gênero como um _query param_ (`/actor?gender=`)
  - Devolver a quantidade de atores/atrizes desse gênero

    ```tsx
    app.get("/actor", async (req: Request, res: Response) => {
      try {
        const count = await countActors(req.query.gender as string);
        res.status(200).send({
          quantity: count,
        });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });
    ```

    - Exercício 4

    Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, devemos:

    - Definir o método como `PUT`
    - Criar um path: `/actor`
    - Receber os parâmetros pelo body

    ````tsx
    app.put("/actor", async (req: Request, res: Response) => {
      try {
        await createActor(
          req.body.id,
          req.body.name,
          req.body.salary,
          new Date(req.body.dateOfBirth),
          req.body.salary
        );

        res.status(200).send();
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });

    Crie um endpoint para cada uma das especificações abaixo:

    - a.
      - Deve ser um POST (`/actor`)
      - Receber o salário e o id pelo body
      - Simplesmente atualizar o salário do ator com id em questão
    - b.

      - Deve ser um DELETE (`/actor/:id`)
      - Receber id do ator como _path param_
      - Simplesmente deletar o ator da tabela

    - Dicas

      a.

      app.post("/actor", async (req: Request, res: Response) => {
        try {
          await updateSalary(req.body.id, req.body.salary);
          res.status(200).send({
            message: "Success",
          });
        } catch (err) {
          res.status(400).send({
            message: err.message,
          });
        }
      });

    b.

    app.delete("/actor/:id", async (req: Request, res: Response) => {
      try {
        await deleteActor(req.params.id);
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });
    ```
    ````

- Exercício 6

  Especificações do Endpoint:

  - Deve ser um GET (`/movie/all`)
  - Não recebe nada
  - Retorna todos os filmes. Ele deve retornar, no máximo, uma lista com 15 itens

    ```
- Exercício 7

  Especificações do Endpoint:

  - Deve ser um GET (`/movie/search`)
  - Deve receber o termo de busca como uma query string (`/movie/search?query=`)
  - Faz a busca entre todos os filmes que tenham o termo de busca no nome ou na sinopse. Além disso, a lista deve vir ordenada pela data de lançamento

  - Dicas

    ```tsx
    app.get("/movie/search", async (req: Request, res: Response) => {
      try {
        const movies = await searchMovie(req.query.query as string);

        res.status(200).send({
          movies: movies,
        });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });
    ```
