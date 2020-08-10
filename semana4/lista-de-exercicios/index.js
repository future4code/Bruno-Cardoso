/*
    LISTA DE EXERCÍCIOS
*/

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//Ex 1.

// Inicia a função
// recebe um parâmetro
/* A constante cotacao recebe um prompt que terá um cast
   convertendo a entrada para número */
// O return da função será uma concatenação juntamente com o parâmetro multiplicado pela variável
// A constante meuDinheiro recebe a função assumindo um parâmetro ja definido com número 100.
// o console mostrará o valor da varável meuDinheiro que será 100 * o valor informado pelo usuário.

//Ex 2.

// Inicia a função
// recebe dois parâmetros, tipoDeInvestimento e valor.
// A variável tipoDeInvestimento que dá inicio a condicional switch caso seja verdade.
// Na qual em cada case (IF) tem sua condição que são os tipos de investimento, e como default (ELSE) um alert.
// O return da função será a variavel valorAposInvestimento, para que as condições sejam acessadas fora do bloco da função.
/* depois são declaradas duas constantes a primeira entra na condição Ações e a segunda entra no default, pois não
   atinge nenhum dos cases.*/
// primeiro console mostra o valor de Ações
// segundo mostra mensagem de TIPO DE INVESTIMENTO INFORMADO INCORRETO.

//Ex 3.

// são declarados 3 arrays
// o primeiro com números em 14 índices
// os outros dois vazios.
/* é iniciado um laço (FOR OF) no qual o loop entra se atingir a condicional (IF) na qual
   os numeros do array numeros tiverem sua divisão por 2 e o resto igual a 0 */
// ou seja números pares
/* o array array1 que estava vazio receberá todos os números pares através do método push que passará cada
   número par sempre na ultima posição (índice) do array */
/* se for false entrará no ELSE e passará todos os números impares para o array array2 também utilizando
   o método push. */
/* Os 3 consoles mostram respectivamente a quantidade de índices
   cada array, através do método length e apenas o primeiro acompanha uma mensagem.*/

//Ex 4.

// é declarado um array de numeros
// São declaradas duas váriáveis que respectivamente recebem o valor Infinity e 0.
// é iniciado um laço (FOR OF).
// que tem duas condições (IF)
// a primeira receberá todos os números a partir do número negativo.
// a segunda recebera apenas os numeros maiores que 0.
// Os 2 consoles, mostrará os números respectivamente.

// EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

/*Ex 1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.*/

// Usando os Laços: WHILE, FOR E FOR OF

// WHILE

function lacoWhile() {
  let i = 0;

  while (i < 10) {
    console.log(i);

    i++;
  }
}

console.log(lacoWhile());

// FOR

function lacoFor() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

console.log(lacoFor());

// FOR OF
let arrayExemplo = [10, 20, 50, 60, 70, 90];

function forOf() {
  for (let numero of arrayExemplo) {
    console.log(arrayExemplo[numero]);
  }
}

console.log(forOf());

/*Ex 2. Para este exercício considere as seguintes variáveis:

            const booleano1 = true
            const booleano2 = false
            const booleano3 = !booleano2 = true
            const booleano4 = !booleano3 = false

a) booleano1 && booleano2 && !booleano4

b) (booleano1 && booleano2) || !booleano3

c)  (booleano2 || booleano3) && (booleano4 || booleano1)

d) !(booleano2 && booleano3) || !(booleano1 && booleano3)

e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

*/

// a)  false
// b)  true
// c)  true
// d)  true
// e)  true

/* 3. Você tem que escrever um código que, dado um número N, ele imprima (no console)
      os N primeiros números pares (por exemplo, se N for 3, você deve imprimir 0, 2 e 4;
      se N for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta
      tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:

      const quantidadeDeNumerosPares = se N for 3
      let i = 0
      while(i <= quantidadeDeNumerosPares) {
          console.log(i*2)
      }

    Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.
*/

const quantidadeDeNumerosPares = 10;
let i = 0;
while (i <= quantidadeDeNumerosPares) {
  console.log(i * 2);
  i++;
}

/*Ex 4. Vocês lembram de trigonometria? ~~(Oh, não, trigonometria)~~. Relaxem. O exercício é simples, mas
      mexe com isso. Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos
      como classifica-los dependendo do tamanho de seus lados. Se um triângulo possuir os **três lados
      iguais**, ele é chamado de "Equilátero". Se possuir, **dois (e somente 2) lados iguais**, diz-se
      que ele é "Isósceles". Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". Faça uma
      função que receba como parâmetro os tamanhos dos três lados do triângulo: `a, b, c`  e retorne se ele
      é equilátero, isósceles ou escaleno.
*/
let a = Number(prompt("digite o numero do primeiro lado do triângulo"));
let b = Number(prompt("digite o numero do segundo lado do triângulo"));
let c = Number(prompt("digite o numero do terceeiro lado do triângulo"));

function trigonoMetry(a, b, c) {
  if (a === b && b === c && a === c) {
    console.log("Equilátero");
  }
  if (a === b && b !== c) {
    console.log("Isóceles");
  }
  if (a !== b && b !== c && a !== c) {
    console.log("Escaleno");
  }
}

trigonoMetry(a, b, c);

/*Ex 5. Faça um programa que, dados dois números

I. indique qual é o maior,

II. determine se eles são divisíveis um pelo outro (use o operador `%`) e

III. determine a diferença entre eles (o resultado deve ser um número positivo sempre)

*/

function doisNumeros(a, b) {
  a = 15;
  b = 30;
  let c = a - b;
  let d = b - a;

  if (a > b) {
    console.log(`${a} maior que ${b}`);
  }
  if (b > a) {
    console.log(`${b} maior que ${a}`);
  }
  if (a > b && a % b === 0) {
    console.log(`${a} é divisível por ${b}`);
  }
  if (a < b && a % b !== 0) {
    console.log(`${a} não é divisível por ${b}`);
  }
  if (a > b && a - b > 0) {
    console.log(`A diferença entre eles é ${c}`);
  }
  if (b > a && b - a > 0) {
    console.log(`A diferença entre eles é ${d}`);
  }
}

doisNumeros();

// EXERCÍCIOS DE FUNÇÃO

/*Ex 1. Escreva uma função que receba um array de números
  e imprima na tela o segundo maior e o segundo menor número.
  Em seguida, invoque essa função. (Não é permitido usar funções
  de ordenação de vetores.)
*/

/////////////////////////////////////////////////////////////////////////////////

/*Ex 2. Escreva uma função não nomeada que faça um 
  alert("Hello Future4");. Em seguida, invoque essa função.
*/

const imprima = (msg) => {
  alert("Hello Future4");
};

imprima();

// EXERCÍCIOS DE OBJETOS

/*Ex 1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.
 */

/*
Podemos usar arrays e objetos quando temos situações na qual precisamos acessar muitos valores de forma organizada
ao invés de dividi-los em muitas variáveis.
*/

/*Ex 2. Crie uma função chamada criaRetangulo que recebe como parâmetros dois lados
       (lado1 e lado2) e retorna um objeto com 4 informações: largura (lado1), altura
       (lado2), perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2).
*/

const criaRetangulo = (lado1, lado2) => {
  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    área: lado1 * lado2,
  };
  return retangulo;
};

/*Ex 3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes
propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes).
Imprima na tela a seguinte string, baseada nos valores do objeto:
Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1,
ATRIZ 2, ATOR n. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.
*/

const filmeFavorito = {
  titulo: "The Godfather",
  ano: 1972,
  diretor: "Francis Ford Coppola",
  atores: ["Al Pacino", "Marlon Brando"],
  atrizes: ["Diane Keaton", "Thalia Shire"],
};

console.log(
  `Venha assistir ao filme ${filmeFavorito.titulo} de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor}, e estrelado por ${filmeFavorito.atores}, ${filmeFavorito.atrizes}`
);

/*Ex 4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de nome, idade,
  email e endereco. Crie uma função chamada anonimizarPessoa, que deverá retornar um novo objeto com
  as mesmas propriedades, mas com a string ANÔNIMO no lugar do nome. O objeto original deve ser mantido
  com o nome da pessoa.
  */

const pessoaQualquer = {
  nome: "Bruno da Cruz Cardoso",
  idade: 28,
  email: "bruno.cards27@gmail.com",
  endereco: "Rua Sgto Leonardo de Castro Carvalho",
};

const anonimizarPessoa = (nomeAnonimo) => {
  nome += nomeAnonimo;
};

pessoaQualquer.nome = "ANÔNIMA";
console.log(pessoaQualquer);

// EXERCÍCIOS FUNÇÕES DE ARRAY

/*Ex 1. Considere um array com o seguinte formato:
  [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

a) Faça uma função que retorne um novo array só com os adultos (pessoas com idade igual ou superior a 20)
b) Faça uma função que retorne um novo array só com as crianças/adolescentes (pessoas com idade inferior a 20)
*/

let arrayPessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
]

const callback = (adultos, index, array) => {
  return adultos.idade > 18  
}

const soAdultos = arrayPessoas.filter(callback)
console.log(soAdultos)
