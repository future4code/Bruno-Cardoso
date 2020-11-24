- Exercício 1

  No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações.

  As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela

  ```sql
  CREATE TABLE Rating (
  		id VARCHAR(255) PRIMARY KEY,
      comment TEXT NOT NULL,
  		rate FLOAT NOT NULL,
      movie_id VARCHAR(255),
      FOREIGN KEY (movie_id) REFERENCES Movie(id)
  )
  ```

  _a. Explique o que é uma chave estrangeira_
  FOREIGN KEY é a chave que se comunica com outra tabela através de uma
  REFERENCES que geralmente são os ID'S.

  _b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes_
  Done

  _c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query._
  Não pode atualizar ou adicionar uma linha filha: não há como referenciar
  uma linha que não existe.

  d. \_Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
  Done

  _e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query._
  Não dá pra atualizar ou deletar por causa da FOREIGN KEY.

  ````

  - Exercício 2

    Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**

    Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.

    ```sql
    CREATE TABLE MovieCast (
    		movie_id VARCHAR(255),
    		actor_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id),
        FOREIGN KEY (actor_id) REFERENCES Actor(id)
    );
  ````

  _a. Explique, com as suas palavras, essa tabela_
  É uma tabela que relaciona o id dos filmes com o id da tabela filmes
  e o mesmo para os atores.

  _b. Crie, ao menos, 6 relações nessa tabela_
  Done

  _c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query_
  Não pode atualizar ou adicionar uma linha filha: não há como referenciar
  uma linha que não existe.

  _d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query_
  Não dá pra atualizar ou deletar por causa da FOREIGN KEY.

  ````

  - Exercício 3

    Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`.

    Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim:

    ```sql
    SELECT * FROM Movie
    INNER JOIN Rating ON Movie.id = Rating.movie_id;
  ````

  _a. Explique, com suas palavras, a query acima. O que é o operador `ON`?_
  O operador ON é uma condição do JOIN

  _b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados._

  ```sql
  SELECT Movies.title, Rating.movie_id, Rating.rate
  FROM Movies
  INNER JOIN Rating
  ON Movies.id = Rating.movie_id;
  ```

- Exercício 4

  Existem outros dois operadores do tipo `JOIN`: `LEFT JOIN` e `RIGHT JOIN`. O primeiro retorna **todas as ocorrências** da **primeira** tabela (à esquerda) e, então, procura todas as correspondências dessa tabela na outra. O segundo operador retorna **todas as ocorrências** da **segunda** tabela (à direita) e, então, procura todas as correspondências na outra tabela.

  _a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário_

  _b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator_

  _c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)_

  a.

  ```sql
  SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
  FROM Movie m
  LEFT JOIN Rating r ON m.id = r.movie_id;
  ```

  b.

  ```sql
  SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
  RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
  ```

  c.

  ```sql
  SELECT AVG(r.rate), m.id, m.title FROM Movie m
  LEFT JOIN Rating r ON m.id = r.movie_id
  GROUP BY (m.id);
  ```

- Exercício 4

  Existem outros dois operadores do tipo `JOIN`: `LEFT JOIN` e `RIGHT JOIN`. O primeiro retorna **todas as ocorrências** da **primeira** tabela (à esquerda) e, então, procura todas as correspondências dessa tabela na outra. O segundo operador retorna **todas as ocorrências** da **segunda** tabela (à direita) e, então, procura todas as correspondências na outra tabela.

  _a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário_

  _b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator_

  _c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)_

  - Dicas

    a.

    ```sql
    SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
    FROM Movie m
    LEFT JOIN Rating r ON m.id = r.movie_id;
    ```

    b.

    ```sql
    SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
    RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
    ```

    c.

    ```sql
    SELECT AVG(r.rate), m.id, m.title FROM Movie m
    LEFT JOIN Rating r ON m.id = r.movie_id
    GROUP BY (m.id);
    ```

- Exercício 5

  Agora, para finalizar, vamos ver uma query com a nossa relação **M:N**. Nela, nós temos 3 tabelas envolvidas: `Movie`, `Actor` e `MovieCast`. Já vimos que conseguimos juntar informações de duas tabelas na mesma query, certo? Agora, vamos tentar unir as informações das três tabelas de uma vez só.

  Para isso, só precisamos usar o operador JOIN duas vezes, mas em uma ordem que faça sentido. Primeiro, unimos **uma** das tabelas independentes (`Movie` e `Actor`) com a tabela de junção `MovieCast`, e, só então, unimos com a outra tabela independente. Veja essa query abaixo:

  ```sql
  SELECT * FROM Movie m
  LEFT JOIN MovieCast mc ON m.id = mc.movie_id
  JOIN Actor a ON a.id = mc.actor_id;
  ```

  _a. Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?_

  _b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query_

  _c. A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado._

  - Veja a query

    ```sql
    SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
    ```

  _d. **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)_

  - Dicas

    b.

    ```sql
    SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
    ```

    c.

    ```sql
    SELECT
    		m.id as movie_id,
        m.title,
        a.id as actor_id,
        a.name,
        r.rate,
        r.comment
    FROM Movie m
    LEFT JOIN Rating r on r.movie_id = m.id
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
    ```

- Exercício 6

  Para finalizar esse exercício, você vai ter que implementar, a sós, uma nova relação no nosso sistema: os Óscar dos filmes. Armazene o nome do óscar (`Óscar de melhor filme`, `Óscar de melhor direção`, etc) e a data em que o filme o ganhou. Lembre-se que, nesse caso, estamos só considerando o óscar para os filmes.

  _a. Que tipo de relação é essa?_
  M:N

  _b. Explicite a query que você usou para criar a tabela_

  _c. Crie ao menos 2 óscar para cada um dos filmes_

  _d. Faça uma query que retorne todos os filmes e seus respectivos óscar_
