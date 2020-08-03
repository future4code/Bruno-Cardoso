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

// combinações que ganham
combinacaoUsuario = carta1DoComputador.texto + carta2DoUsuario.texto
combinacaoComputador = carta1DoComputador.texto + carta2DoComputador.texto

usuarioGanhou = (somaUsuario === 21 && somaComputador < 21 || somaUsuario > somaComputador && somaUsuario < 22 && somaUsuario > somaComputador || combinacaoUsuario === "A" + "J" || "A" + "Q" || "A" + "K" || "A" + "10")
computadorGanhou = (somaComputador === 21 && somaUsuario < 21 || somaComputador > somaUsuario && somaComputador < 22 && somaComputador > somaUsuario || combinacaoComputador === "A" + "J" || "A" + "Q" || "A" + "K" || "A" + "10")
