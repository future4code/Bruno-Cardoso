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

let carta1DoComputador = comprarCarta()
let carta2DoComputador = comprarCarta()

// soma das cartas
let somaUsuario = carta1DoUsuario.valor + carta2DoUsuario.valor
let somaComputador = carta1DoComputador.valor + carta2DoComputador.valor

// usuario ganha
let usuarioGanhou = (somaUsuario === 21 && somaComputador < 21 || somaUsuario > somaComputador && somaUsuario < 22 && somaUsuario > somaComputador)

// computador ganhou
let computadorGanhou = (somaComputador === 21 && somaUsuario < 21 || somaComputador > somaUsuario && somaComputador < 22 && somaComputador > somaUsuario)

// empate
let empate = (somaUsuario === somaComputador && somaUsuario < 22 && somaComputador < 22)


// variável que inicia o loop
let iniciaJogo = (confirm("Quer iniciar uma nova rodada?"))


if (iniciaJogo === true) {
   while (usuarioGanhou === false || computadorGanhou === false || empate === false) {
      let daAsCartas = (confirm(`Suas cartas são ${carta1DoUsuario.texto} ${carta2DoUsuario.texto}. A carta revelada do computador é ${carta1DoComputador.texto}.`))

      // verificar se : houve ganhador 

      // usuário ganha

      if (usuarioGanhou) {
         confirm(`Suas cartas são ${carta1DoUsuario.texto} ${carta2DoUsuario.texto}. sua pontuação é ${somaUsuario}. As cartas do computador são ${carta1DoComputador.texto} ${carta2DoComputador.texto}. A pontuação do computador é ${somaComputador}. O usuário ganhou!`)

         // computador ganha

      } else if (computadorGanhou) {
         confirm(`Suas cartas são ${carta1DoUsuario.texto} ${carta2DoUsuario.texto}. sua pontuação é ${somaUsuario}. As cartas do computador são ${carta1DoComputador.texto} ${carta2DoComputador.texto}. A pontuação do computador é ${somaComputador}. O computador ganhou!`)

         // empate
      } else if (empate) {
         confirm(`Suas cartas são ${carta1DoUsuario} ${carta2DoUsuario}. sua pontuação é ${somaUsuario}. As cartas do computador são ${carta1DoComputador} ${carta2DoComputador}. Pontuação do usuário é ${somaUsuario} e a pontuação do computador ${somaComputador}, sendo assim temos um Empate!`)
      } else {
         iniciaJogo === false
         console.log("O jogo acabou!")
      }
   }

}
