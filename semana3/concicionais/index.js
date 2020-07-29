// Interpretação de código

/* 
Ex 1.

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

O programa irá receber um número digitado pelo USUÁRIO, e se o RESTO DA DIVISÃO do número que o USUÁRIO
digitar for igual a 0 em VALOR e TIPO, ele entrará na condição IF pois se trata de um valor TRUE, e 
IMPRIMIRA na tela a mensagem "Passou no teste." SENÃO entrará no bloco ELSE e IMPRIMIRÁ na tela a mensagem
"Não passou no teste." Para números pares ele IMPRIME a primeira mensagem e para numeros IMPARES a segunda.

 */

/*
Ex 2.

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a.
        O código serve para definir preços das frutas que o USUÁRIO digitar.

// b.
        "O preço da fruta Maçã é R$ 2.25"

// c.
        "O preço da fruta Pêra é R$ 5"



/*
Ex 3.


const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


// a.
        A primeira linha tem uma variável constante chamada numero pedidndo para o USUÁRIO digitar um número
        e já está convwertendo o valor da variável no tipo número.

// b.
        "Esse número passou no teste"
        para -10 não aconteceria nada, pois o numero não é > 0, dai não entraria na condição IF por ser FALSE.

// c.
        Haverá um erro sim, pois a variável mensagem é declarada apenas dentro do escopo pertencente ao BLOCO do IF.




// */

//      Escrita de código

/* 
Ex 4.
*/

        let idadeDoUsuario = Number(prompt("Qual a sua idade? "))

        if(idadeDoUsuario >= 18) {
                console.log("Você pode dirigir!")
        } else {
                console.log("Você não pode dirigir")
        }


/* 
Ex 5.
*/

        let periodoMatutino = "M"
        let periodoVespertino = "V"
        let periodoNoturno = "N"

        let qualPeriodo = String(prompt("Me diz qual período você estuda, digite M (matutino) ou V (Vespertino) ou N (Noturno) : "))

        if(periodoMatutino === qualPeriodo) {
                console.log("Bom dia!")
        } else if (periodoVespertino === qualPeriodo) {
                console.log("Boa tarde!")
        } else if (periodoNoturno === qualPeriodo) {
                console.log("Boa noite!")
        } else {
                console.log("Você não estuda")
        }


/*
Ex 6.
*/

        let umPeriodo = String(prompt("Me diz qual período você estuda, digite M (matutino) ou V (Vespertino) ou N (Noturno) : "))

        switch (umPeriodo) {
                case "M":
                        console.log("Bom dia!")
                        break
                case "V":
                        console.log("Boa tarde!")
                        break
                case "N":
                        console.log("Boa noite!")
                        break
                default:
                        console.log("Você não estuda")
                        break;
                }
        
/*
Ex 7.
*/

        let filme = String(prompt("Qual gênero de filme você vai assistir?"))
        let ingresso = Number(prompt("Qual o preço do ingresso?"))

        if(filme === "fantasia" && ingresso <= 15) {
                console.log("Bom filme!")
        } else {
                console.log("Escolha outro filme!")
        }