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

// ------------------------ DESAFIOS ------------------------ >>>>>

// let movieCategory = prompt("Qual o genero do filme que está passando?")
// let price = Number(prompt("Qual o preço do ingresso?"))

// if (movieCategory === "Fantasia" && price <= 15) {
//   let snack = prompt("Qual Snack vai comer, pipoca, chocolate, doces?")
//   console.log("Bom filme!")
//   console.log(`... com ${snack}`)
// } else {
//   console.log("Escolha outro filme :(")
// }

// Tabela de preços

let nationalSf = {
        category1: 1320,
        category2: 880,
        category3: 550,
        category4: 220,
      }
      
      let nationalDt = {
        category1: 660,
        category2: 440,
        category3: 330,
        category4: 170,
      }
      
      let nationalFi = {
        category1: 1980,
        category2: 1320,
        category3: 880,
        category4: 330,
      }
      
      // solicitações
      
      const fullName = prompt("Qual seu nome completo?")
      const kindOfMatch = prompt(
        "Escreva as siglas IN para jogo internacional e DO para doméstico: "
      ).toUpperCase()
      const qualifyTo = prompt(
        "Responda 'SF' para Semi final, 'DT' Decisão do terceiro lugar ou 'FI' pra final: "
      ).toUpperCase()
      const categoryChoose = Number(prompt("Qual a categoria? 1, 2, 3 ou 4 ?"))
      
      const quanty = Number(
        prompt("Qual a quantidade de ingressos que deseja comprar?")
      )
      
      const priceOfSfCat1 = quanty * nationalSf.category1
      const priceOfSfCat2 = quanty * nationalSf.category2
      const priceOfSfCat3 = quanty * nationalSf.category3
      const priceOfSfCat4 = quanty * nationalSf.category4
      
      const priceOfDtCat1 = quanty * nationalDt.category1
      const priceOfDtCat2 = quanty * nationalDt.category2
      const priceOfDtCat3 = quanty * nationalDt.category3
      const priceOfDtCat4 = quanty * nationalDt.category4
      
      const priceOfFiCat1 = quanty * nationalFi.category1
      const priceOfFiCat2 = quanty * nationalFi.category2
      const priceOfFiCat3 = quanty * nationalFi.category3
      const priceOfFiCat4 = quanty * nationalFi.category4
      
      console.log("---Dados da compra---")
      console.log(`Nome do cliente: ${fullName}`)
      
      if (kindOfMatch === "DO") {
        console.log("Tipo do jogo : Nacional")
      } else {
        console.log("Tipo do jogo : Internacional")
      }
      if (qualifyTo === "SF") {
        console.log("Etapa do jogo: Semi-final")
      } else if (qualifyTo === "DT") {
        console.log("Etapa do jogo: Decisão do Terceiro lugar")
      } else if (qualifyTo === "FI") {
        console.log("Etapa do jogo: Final")
      }
      
      if (qualifyTo === "SF" || qualifyTo === "FI" || qualifyTo === "DT") {
        categoryChoose
      }
      if (categoryChoose === "1") {
        console.log("Categoria : 1")
      } else if (categoryChoose === "2") {
        console.log("Categoria : 2")
      } else if (categoryChoose === "3") {
        console.log("Categoria : 3")
      } else if (categoryChoose === "4") {
        console.log("Categoria : 4")
      }
      if (
        categoryChoose === "1" ||
        categoryChoose === "2" ||
        categoryChoose === "3" ||
        categoryChoose === "4"
      ) {
        quanty
      }
      if (quanty > 0) {
        console.log(`Categoria : ${categoryChoose}`)
        console.log(`Quantidade de Ingressos: ${quanty} ingressos`)
      }
      console.log("---Valores---")
      
      // Semi final Nacional e Internacional
      
      if (kindOfMatch === "DO" && qualifyTo === "SF" && categoryChoose === 1) {
        console.log(`Valor do ingresso : ${nationalSf.category1}`)
        console.log(`Valor total : ${priceOfSfCat1}`)
      } else if (kindOfMatch === "DO" && qualifyTo === "SF" && categoryChoose === 2) {
        console.log(`Valor do ingresso : ${nationalSf.category2}`)
        console.log(`Valor total : ${priceOfSfCat2}`)
      } else if (kindOfMatch === "DO" && qualifyTo === "SF" && categoryChoose === 3) {
        console.log(`Valor do ingresso : ${nationalSf.category3}`)
        console.log(`Valor total : ${priceOfSfCat3}`)
      } else if (kindOfMatch === "DO" && qualifyTo === "SF" && categoryChoose === 4) {
        console.log(`Valor do ingresso : ${nationalSf.category4}`)
        console.log(`Valor total : ${priceOfSfCat4}`)
      }
      
      if (kindOfMatch === "IN" && qualifyTo === "SF" && categoryChoose === 1) {
        console.log(`Valor do ingresso : ${nationalSf.category1 / (4.1)}`)
        console.log(`Valor total : ${priceOfSfCat1 / (4.1)}`)
      } else if (kindOfMatch === "IN" && qualifyTo === "SF" && categoryChoose === 2) {
        console.log(`Valor do ingresso : ${nationalSf.category2 / (4.1)}`)
        console.log(`Valor total : ${priceOfSfCat2 / (4.1)}`)
      } else if (kindOfMatch === "IN" && qualifyTo === "SF" && categoryChoose === 3) {
        console.log(`Valor do ingresso : ${nationalSf.category3 / (4.1)}`)
        console.log(`Valor total : ${priceOfSfCat3 / (4.1)}`)
      } else if (kindOfMatch === "IN" && qualifyTo === "SF" && categoryChoose === 4) {
        console.log(`Valor do ingresso : ${nationalSf.category4 / (4.1)}`)
        console.log(`Valor total : ${priceOfSfCat4 / (4.1)}`)
      }
      
      // Decisão terceiro lugar Nacional e Internacional
      
      if (kindOfMatch === "DO" && qualifyTo === "DT" && categoryChoose === 1) {
        console.log(`Valor do ingresso : ${nationalDt.category1}`)
        console.log(`Valor total : ${priceOfDtCat1}`)
      } else if (kindOfMatch === "DO" && qualifyTo === "DT" && categoryChoose === 2) {
        console.log(`Valor do ingresso : ${nationalDt.category2}`)
        console.log(`Valor total : ${priceOfDtCat2}`)
      } else if (kindOfMatch === "DO" && qualifyTo === "DT" && categoryChoose === 3) {
        console.log(`Valor do ingresso : ${nationalDt.category3}`)
        console.log(`Valor total : ${priceOfDtCat3}`)
      } else if (kindOfMatch === "DO" && qualifyTo === "DT" && categoryChoose === 4) {
        console.log(`Valor do ingresso : ${nationalDt.category4}`)
        console.log(`Valor total : ${priceOfDtCat4}`)
      }
      
      if (kindOfMatch === "IN" && qualifyTo === "DT" && categoryChoose === 1) {
        console.log(`Valor do ingresso : ${nationalDt.category1 / (4.1)}`)
        console.log(`Valor total : ${priceOfDtCat1 / (4.1)}`)
      } else if (kindOfMatch === "IN" && qualifyTo === "DT" && categoryChoose === 2) {
        console.log(`Valor do ingresso : ${nationalDt.category2 / (4.1)}`)
        console.log(`Valor total : ${priceOfDtCat2 / (4.1)}`)
      } else if (kindOfMatch === "IN" && qualifyTo === "DT" && categoryChoose === 3) {
        console.log(`Valor do ingresso : ${nationalDt.category3 / (4.1)}`)
        console.log(`Valor total : ${priceOfDtCat3 / (4.1)}`)
      } else if (kindOfMatch === "IN" && qualifyTo === "DT" && categoryChoose === 4) {
        console.log(`Valor do ingresso : ${nationalDt.category4 / (4.1)}`)
        console.log(`Valor total : ${priceOfDtCat4 / (4.1)}`)
      }
      
      // Final Nacional e Internacional
      
      if (kindOfMatch === "DO" && qualifyTo === "FI" && categoryChoose === 1) {
        console.log(`Valor do ingresso : ${nationalFi.category1}`)
        console.log(`Valor total : ${priceOfFiCat1}`)
      } else if (kindOfMatch === "DO" && qualifyTo === "FI" && categoryChoose === 2) {
        console.log(`Valor do ingresso : ${nationalFi.category2}`)
        console.log(`Valor total : ${priceOfFiCat2}`)
      } else if (kindOfMatch === "DO" && qualifyTo === "FI" && categoryChoose === 3) {
        console.log(`Valor do ingresso : ${nationalFi.category3}`)
        console.log(`Valor total : ${priceOfFiCat3}`)
      } else if (kindOfMatch === "DO" && qualifyTo === "FI" && categoryChoose === 4) {
        console.log(`Valor do ingresso : ${nationalFi.category4}`)
        console.log(`Valor total : ${priceOfFiCat4}`)
      }
      
      if (kindOfMatch === "IN" && qualifyTo === "FI" && categoryChoose === 1) {
        console.log(`Valor do ingresso : ${nationalFi.category1 / (4.1)}`)
        console.log(`Valor total : ${priceOfFiCat1 / (4.1)}`)
      } else if (kindOfMatch === "IN" && qualifyTo === "FI" && categoryChoose === 2) {
        console.log(`Valor do ingresso : ${nationalFi.category2 / (4.1)}`)
        console.log(`Valor total : ${priceOfFiCat2 / (4.1)}`)
      } else if (kindOfMatch === "IN" && qualifyTo === "FI" && categoryChoose === 3) {
        console.log(`Valor do ingresso : ${nationalFi.category3 / (4.1)}`)
        console.log(`Valor total : ${priceOfFiCat3 / (4.1)}`)
      } else if (kindOfMatch === "IN" && qualifyTo === "FI" && categoryChoose === 4) {
        console.log(`Valor do ingresso : ${nationalFi.category4 / (4.1)}`)
        console.log(`Valor total : ${priceOfFiCat4 / (4.1)}`)
      }