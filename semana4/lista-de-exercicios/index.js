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
