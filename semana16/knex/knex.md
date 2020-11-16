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

    Está na hora de começar a criar alguns endpoints. O mais simples de todos talvez seja o de pegar o ator pelo `id`.  Queremos criar um método GET que receba como *path param* o *id* do ator cujas informações queremos pegar. Para isso, devemos:

    - Usar a função `get` do express
    - Definir o *path param* com a **chave id: `/actor/:id`.** Dessa forma, poderemos acessar o endpoint assim: `http://localhost:3000/user/id-do-usuario`

    ```tsx
    app.get("/actor/:id", async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });
    ```

    a. Crie um endpoint com as especificações acima

    b. Crie um endpoint agora com as seguintes especificações:

    - Deve ser um GET (`/actor`)
    - Receber o gênero como um *query param* (`/actor?gender=`)
    - Devolver a quantidade de atores/atrizes desse gênero

    - Dicas

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