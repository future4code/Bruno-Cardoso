/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// variáveis que receberão os valores do objeto

let carta1DoUsuario = comprarCarta()
let carta2DoUsuario = comprarCarta()
let carta3DoUsuario = comprarCarta()

let carta1DoComputador = comprarCarta()
let carta2DoComputador = comprarCarta()
let carta3DoComputador = comprarCarta()

// variável que inicia o loop
let iniciaJogo = (confirm("Quer iniciar uma nova rodada?"))

// soma das cartas
let somaUsuario = carta1DoUsuario.valor + carta2DoUsuario.valor
let somaComputador = carta1DoComputador.valor + carta2DoComputador.valor

// combinações que ganham
let combinacaoUsuario = carta1DoComputador.texto + carta2DoUsuario.texto
let combinacaoComputador = carta1DoComputador.texto + carta2DoComputador.texto

// usuario ganha
let usuarioGanhou = (somaUsuario === 21 && somaComputador < 21 || somaUsuario > somaComputador && somaUsuario < 22 && somaUsuario > somaComputador || combinacaoUsuario === "A" + "J" || "A" + "Q" || "A" + "K" || "A" + "10")

// computador ganhou
let computadorGanhou = (somaComputador === 21 && somaUsuario < 21 || somaComputador > somaUsuario && somaComputador < 22 && somaComputador > somaUsuario || combinacaoComputador === "A" + "J" || "A" + "Q" || "A" + "K" || "A" + "10")

// empate
let empate = (somaUsuario === somaComputador && somaUsuario < 22 && somaComputador < 22)

if (iniciaJogo == false) {
   console.log("O jogo acabou!")
}

else {

   while (iniciaJogo) {
      let daAsCartas = (confirm(`Suas cartas são ${carta1DoUsuario.texto} ${carta2DoUsuario.texto}. A carta revelada do computador é ${carta1DoComputador.texto}. Deseja comprar mais uma carta?`))

      // verificar se : houve ganhador 

      if (usuarioGanhou === true) {
         alert(`Suas cartas são ${carta1DoUsuario.texto} ${carta2DoUsuario.texto}. sua pontuação é ${somaUsuario}. As cartas do computador são ${carta1DoComputador.texto} ${carta2DoComputador.texto}. A pontuação do computador é ${somaComputador}. O usuário ganhou!`)


      } else if (computadorGanhou === true) {
         alert(`Suas cartas são ${carta1DoUsuario.texto} ${carta2DoUsuario.texto}. sua pontuação é ${somaUsuario}. As cartas do computador são ${carta1DoComputador.texto} ${carta2DoComputador.texto}. A pontuação do computador é ${somaComputador}. O computador ganhou!`)

         // verifica se houve empate
      } else if (empate) {
         alert(`Suas cartas são ${carta1DoUsuario} ${carta2DoUsuario}. sua pontuação é ${somaUsuario}. As cartas do computador são ${carta1DoComputador} ${carta2DoComputador}. Pontuação do usuário é ${somaUsuario} e a pontuação do computador ${somaComputador}, sendo assim temos um Empate!`)

      } else {
         console.log("O jogo acabou!")
      }
      iniciaJogo = (confirm("Quer iniciar uma nova rodada?"))
   }
}
