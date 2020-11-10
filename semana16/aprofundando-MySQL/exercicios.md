# <h1 style="text-align: center;"> Exercícios de DB Aprofundamento MySQL

**<ol>**

<li style="text-align: justify;"><br>

Leia os comandos abaixo e indique o que eles fazem. **Não** os rode nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas. Você, provavelmente, terá que fazer algumas pesquisas para responder

_a._

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

_Resposta_<br>

Esse comando esta dizendo mais ou menos isso em literal:

```sql
ALTERAR TABELA Actor, DERRUBAR COLUNA salary
```

_Ou seja remova a coluna salary da Tabela._<br>

_b._

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

_Resposta_<br>

Esse comando esta dizendo mais ou menso isso em literal:

```sql
ALTERAR TABELA Actor, TROCAR gender por sex com VARCHAR de 6 caractéres
```

_Ou seja troque o nome da Coluna gender por sex e mude o tipo para VARCHAR com 6 caractéres._

_c._

```sql
> ALTER TABLE Actor CHANGE gender gender VARCHAR(255);<br>
```

Esse comando esta dizendo mais ou menso isso em literal:

```sql
ALTERAR TABELA Actor, TROCAR tipo da coluna gender por VARCHAR com 255 caractéres
```

_d._ Agora, altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres\_<br>

_Resposta_<br>

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
```

<li style="text-align: justify;"><br>

Além de criar e ler as tabelas, é muito importante que entendamos também como atualizar e deletar. Inclusive, essas 4 operações têm um nome muito famoso que vocês com certeza irão ouvir no dia a dia do trabalho: CRUD. Quando falamos que vamos fazer um CRUD, queremos dizer que vamos fazer alguma aplicação que cria (Create), lê (Read), atualiza (Update) e deleta (Delete) algum tipo de informação.

No MySQL, existem mais dois operadores que nos permitiram fazer o CRUD de qualquer coisa. O primeiro deles é o `UPDATE`. A query abaixo muda o nome do ator com id `123` para `Moacyr Franco`:

```sql
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123"
```

_a._ Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`\_<br>

```sql
UPDATE Actor
SET
	name = "Moacyr Franco",
	birth_date = "1936-10-05",
    gender = male
WHERE id = "003";
```

_b._ Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PÃES`. Então, escreva outra query para voltar ao nome anterior.<br>

```sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

_c._ Escreva uma query que atualize todas as informações do ator com o id `005`<br>

```sql
UPDATE Actor
SET
    name = 'Selton Mello',
    birth_date = '1972-12-30',
    salary = 52600000,
    gender = 'male'
WHERE
    id = '005';
```

_d_. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.

_Resposta_<br>

Não localizou o parâmetro e não atualizou nada<br>

```sql
UPDATE Actor
SET
    name = 'Selton Mello',
    birth_date = '1972-12-30',
    salary = 52600000,
    gender = 'male'
WHERE
    id = '025';

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

```

<li style="text-align: justify;"><br>

Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela.

Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`

```sql
DELETE FROM Actor WHERE name = "Tony Ramos"
```

_a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`_

_Resposta_<br>

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

_b. Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R\$1.000.000,00_

_Resposta_<br>

```sql
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
```

<li style="text-align: justify;"><br>

_a. Escreva uma query que pegue o maior salário de todos os atores e atrizes_

_Resposta_<br>

```sql
SELECT MAX(salary) FROM Actor
```

_b. Escreva uma query que pegue o menor salário das atrizes_

_Resposta_<br>

```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```

_c. Escreva uma query que pegue a quantidade de atrizes_

_Resposta_<br>

```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```

_d. Escreva uma query que pegue a soma de todos os salários_

_Resposta_<br>

```sql
SELECT SUM(salary) FROM Actor
```

<li style="text-align: justify;"><br>

_a. Releia a última query. Teste-a. Explique o resultado com as suas palavras_

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

_Resposta_<br>

_Ta pedindo pra selecionar a quantidade total de gêneros
e agrupar por gênero ou seja separar o masculino e o feminino._

_b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética_

_Resposta_<br>

```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

_c. Faça uma query que retorne todos os atores ordenados pelo salário_

_Resposta_<br>

```sql
SELECT * FROM Actor
ORDER BY salary;
```

_d. Faça uma query que retorne os atores com os três maiores salarios_

_Resposta_<br>

```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

_e. Faça uma query que retorne a média de salário por gênero_

_Resposta_<br>

```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

<li style="text-align: justify;"><br>

Você já pegou o padrão né? Primeiro fazemos algo guiado e depois deixamos você fazer a sós!

_a. Altere a tabela de `Movies` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema._

_Resposta_<br>

```sql
ALTER TABLE Moviess ADD playing_limit_date DATE;
```

_b. Altere a tabela de `Movies` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`._

_Resposta_<br>

```sql
ALTER TABLE Moviess CHANGE rating rating FLOAT;
```

_c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído_

_Resposta_<br>

```sql
UPDATE Moviess
SET
	playing_limit_date = "2000-10-27"
WHERE id = "004"
```

```sql
UPDATE Moviess
SET
	playing_limit_date = "2020-11-27"
WHERE id = "003"
```

_d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique._

_Resposta_<br>

Não localizou o parâmetro e não atualizou nada<br>

```sql
DELETE FROM Moviess WHERE id = "001"
```

```sql
UPDATE Moviess
SET
	sinopsys = "atualiza"
WHERE id = "001"

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```

<li style="text-align: justify;"><br>

_a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?_

_Resposta_<br>
_3_

```sql
SELECT COUNT(*) FROM Moviess WHERE rating > 7.5;
```

_b. Qual a média das avaliações dos filmes?_

_Resposta_<br>
_9.299999872843424_

```sql
SELECT AVG(rating) FROM Movies;
```

_c. Qual a quantidade de filmes em cartaz?_

_Resposta_<br>
_1_

```sql
SELECT COUNT(*) FROM Moviess WHERE playing_limit_date > CURDATE();
```

_d. Qual a quantidade de filmes que ainda irão lançar?_

_Resposta_<br>
_0_

```sql
SELECT COUNT(*) FROM Moviess WHERE release_date > CURDATE();
```

_e. Qual a maior nota dos filmes?_

_Resposta_<br>
_10_

```sql
SELECT MAX(rating) FROM Moviess;
```

_f. Qual a menor nota dos filmes?_

_Resposta_<br>
_8_

```sql
SELECT MIN(rating) FROM Moviess;
```

<li style="text-align: justify;"><br>

Escreva **uma** query que:

_a. Retorne todos os filmes em ordem alfabética_

_Resposta_<br>

```sql
SELECT * FROM Moviess ORDER BY title;
```

_b. Retorne os 5 primerios filmes em ordem descrente alfabética_

_Resposta_<br>

```sql
SELECT * FROM Moviess ORDER BY title DESC LIMIT 5;
```

_c. Retorne os 3 filmes mais recentes em cartaz_

_Resposta_<br>

```sql
SELECT * FROM Moviess
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```

_d. Retorne os 3 filmes melhor avalidos_

_Resposta_<br>

```sql
SELECT * FROM Moviess
ORDER BY rating DESC
LIMIT 3;
```
