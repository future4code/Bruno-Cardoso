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

 let iniciaJogo = (confirm("Quer iniciar uma nova rodada?"))

 if(iniciaJogo) {
    let daAsCartas = (confirm(`Suas cartas são ${carta1DoUsuario.texto} ${carta2DoUsuario.texto}. A carta revelada do computador é ${carta1DoComputador.texto}. Deseja comprar mais uma carta?`))
 } else {
    console.log("Fim de Jogo!")
 }

 let somaUsuario = carta1DoUsuario.valor + carta2DoUsuario.valor
 let somaComputador = carta1DoComputador.valor + carta2DoComputador.valor

 // empata
 if(somaUsuario == somaComputador) {
    alert(`A soma das cartas do usuário foi ${somaUsuario + carta3DoUsuario.valor} e a soma do computador foi ${somaComputador + carta3DoComputador.valor}. jogo terminou empatado`)
 } 

 // continua jogando
 let continuaJogo = (confirm(`Suas cartas são ${carta1DoUsuario.texto} ${carta2DoUsuario.texto} e ${carta3DoUsuario.texto}. A carta revelada do computador é ${carta3DoComputador.texto}. Deseja comprar mais uma carta?`))
 
 // usuario ganha  
 if(somaUsuario + carta3DoUsuario.valor == 21 || somaUsuario + carta3DoUsuario.valor > somaComputador + carta3DoComputador.valor && somaUsuario + carta3DoUsuario.valor <= 21){
    alert(`Suas cartas são ${carta1DoUsuario.texto} ${carta2DoUsuario.texto} ${carta3DoUsuario.texto}. sua pontuação é ${somaUsuario + carta3DoUsuario.valor}. As cartas do computadpr são ${carta1DoComputador.texto} ${carta2DoComputador.texto} ${carta3DoComputador.texto}. A pontuação do computador é ${somaComputador + carta3DoComputador.valor}. O usuário ganhou`)
 }


  // computador ganha  
  if(somaComputador + carta3DoComputador.valor == 21 || somaComputador + carta3DoComputador.valor > somaUsuario + carta3DoUsuario.valor && somaComputador + carta3DoComputador.valor <= 21){
   alert(`Suas cartas são ${carta1DoUsuario.texto} ${carta2DoUsuario.texto} ${carta3DoUsuario.texto}. sua pontuação é ${somaUsuario + carta3DoUsuario.valor}. As cartas do computadpr são ${carta1DoComputador.texto} ${carta2DoComputador.texto} ${carta3DoComputador.texto}. A pontuação do computador é ${somaComputador + carta3DoComputador.valor}. O computador ganhou`)
}