# <h1 style="text-align: center;"> Exercícios de DB MySQL

**<ol>**

<li style="text-align: justify;"><br>
a. Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.<br><br>

> CREATE TABLE Actor (<br>
> id VARCHAR(255) PRIMARY KEY,<br>
> name VARCHAR (255) NOT NULL,<br>
> salary FLOAT NOT NULL,<br>
> birth_date DATE NOT NULL,<br>
> gender VARCHAR(6) NOT NULL<br>
> );<br>

**Resposta**<br>
_VARCHAR_ = Para receber strings<br>
_DATE_ = Para receber datas<br>

b. O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.<br>

**Resposta**<br>

_SHOW DATABASES_ = mostra os DB's criados.<br>
_SHOW TABLES_ = mostra as tabelas criadas.<br>

c. O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando DESCRIBE Actor e explique os resultados.<br>

**Resposta**<br>
_Mostra as colunas criaddas na tabela e mais algumas infos, tais como: **tipo**, se o valor é **null**_.<br>

<li style="text-align: justify;"><br>

a. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R\$1.200.000 e data de nascimento 23 de Agosto de 1963:<br>

**Resposta**<br>

> INSERT INTO Actor(id, name, salary, birth_date, gender)<br>
> VALUES(<br>
> "002",<br>
> "Glória Pires",<br>
> 1200000,<br>
> "1963-08-23",<br>
> "female"<br>
> );<br>

b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.<br>

Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta<br>

b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.<br>

> INSERT INTO Actor (id, name, salary, >birth_date, gender)<br>
> VALUES(<br>
> "002", <br>
> "Tony Ramos",<br>
> 400000,<br>
> "1948-08-25",<br>
> "male"<br>
> );<br>

**Resposta**<br>

> Entrada duplicada para a chave PRIMÁRIA "002" ou seja não podem haver entradas com a mesma chave Primária.<br>

c.<br>

> INSERT INTO Actor (id, name, salary)<br>
> VALUES(<br>
> "003",<br>
> "Fernanda Montenegro",<br>
> 300000,<br>
> "1929-10-19",<br>
> "female"<br>
> );<br>

**Resposta**<br>
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1<br>

**Código Correto**<br>

> INSERT INTO Actor (id, name, salary, birth_date, gender)<br>
> VALUES(<br>
> "003",<br>
> "Fernanda Montenegro",<br>
> 300000,<br>
> "1929-10-19",<br>
> "female"<br>
> );<br>

d.<br>
Código de erro: 1364. O campo 'nome' não tem um valor padrão<br>

**Código Correto**<br>

> INSERT INTO Actor (id, name, salary, birth_date, gender)<br>
> VALUES(<br>
> "004",<br>
> "Antônio Fagundes",<br>
> 400000,<br>
> "1949-04-18",<br>
> "male"<br>
> );<br>

e.<br>
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

> INSERT INTO Actor (id, name, salary, birth_date, gender)<br>
> VALUES(<br>
> "005",<br>
> "Juliana Paes",<br>
> 719333.33,<br>
> 1979-03-26,<br>
> "female"<br>
> );<br>

**Código Correto**<br>

> INSERT INTO Actor (id, name, salary, birth_date, gender)<br>
> VALUES(<br>
> "005",<br>
> "Juliana Paes",<br>
> 719333.33,<br>
> 1979-03-26,<br>
> "female"<br>
> );<br>

<li style="text-align: justify;"><br>

a. Escreva uma query que retorne todas as informações das atrizes<br>

**Resposta**<br>

> SELECT \* from Actor WHERE gender = "female"<br>

b. Escreva uma query que retorne o salário do ator com o nome Tony Ramos<br>

**Resposta**<br>

> SELECT salary from Actor WHERE name = "Tony Ramos"<br>

c. Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.<br>

**Resposta**<br>

> SELECT \* from Actor WHERE gender = "invalid"<br>
> Tudo _null_, pois todos os atores e atrizes tem o campo "gender" definido.<br>

d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de
R\$500.000,00<br>

**Resposta**<br>

> SELECT id, name, salary from Actor WHERE salary <= 500000<br>

e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta<br>

> SELECT id, nome from Actor WHERE id = "002"
> Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'<br>

**Resposta**<br>
_não existe a coluna nome e sim name_

> SELECT id, name from Actor WHERE id = "002"<br>

<li style="text-align: justify;"><br>

a. Explique com as suas palavras a query acima<br>

> SELECT \* FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000<br>

**Resposta**<br>
_A query acima diz exatamente "SELECIONE tudo DE Actor ONDE (name tem como "início" a letra "A" OU nome tem como início a Letra "J") E o salario MAIOR que 300000."_<br>

b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R\$350.000,00.<br>

**Resposta**<br>

> SELECT \* FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;<br>

c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.<br>

**Resposta**<br>

> SELECT \* FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";<br>

d. Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00<br>

**Resposta**<br>

> SELECT \* FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND >salary BETWEEN 350000 AND 900000;<br>

<li style="text-align: justify;"><br>

_a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente._

_Crie 4 filmes com as seguintes informações:_

> id: "001",<br>
> Título: "Se Eu Fosse Você",<br>
> Sinopse: "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",<br>
> Data de lançamento: "06/01/2006",<br>
> Avaliação: 7<br>

**Resposta**<br>

> CREATE TABLE Filmes (<br>
> id VARCHAR(255) PRIMARY KEY,<br>
> title VARCHAR (255) NOT NULL,<br>
> sinopsys TEXT NOT NULL,<br>
> release_date DATE NOT NULL,<br>
> rating VARCHAR(6) NOT NULL<br>
> );<br>

<li style="text-align: justify;"><br>

Escreva uma query que:

a. Retorne o id, título e avaliação a partir de um id específico;<br>

**Resposta**<br>

> SELECT id, title, rating FROM Filmes WHERE id = "004";<br>

b. Retorne um filme a partir de um nome específico;<br>

**Resposta**<br>

> SELECT \* FROM Filmes WHERE title = "Se eu fosse você";<br>

c. Retorne o id, título e sinopse dos filmes com avaliação mínima de 7 <br>

**Resposta**<br>

> SELECT id, title, sinopsys FROM Filmes WHERE rating > 7<br>

<li style="text-align: justify;"><br>

Escreva uma query que:

a. Retorna um filme cujo título contenha a palavra flor<br>

**Resposta**<br>

> SELECT \* FROM Filmes WHERE title LIKE "%flor%";<br>

b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.<br>

**Resposta**<br>

> SELECT \* FROM Filmes WHERE title LIKE "%Flor%" OR sinopsys LIKE "%Flor%";<br>

c. Procure por todos os filmes que já tenham lançado

**Resposta**<br>

> SELECT \* FROM Filmes WHERE release_date <= "2020-10-27"<br>

d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.

**Resposta**<br>

> SELECT \* FROM Filmes WHERE release_date <= "2020-10-27" AND (title LIKE "%flor%" OR sinopsys LIKE "%flor%") AND rating > 7;

**FIM**
