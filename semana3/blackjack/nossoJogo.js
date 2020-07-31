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


 // msg de boas vindas
let msgBoasVindas = console.log("Bem vindo ao jogo de Blackjack!")

// aqui iniciamos o jogo ou não
let iniciaJogo = confirm("Quer iniciar uma nova rodada?")
   if(iniciaJogo === true) {
	// o que fazer se o usuário clicar "ok"
} else {
   alert("O jogo acabou!")
}
