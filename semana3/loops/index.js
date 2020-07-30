// Interpretação de código

/* 
Ex 1.

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

* O programa está lendo na primeira linha a variável VALOR com valor 0
* na segunda linha está usando o laço FOR com a variável I como incremento
  na CONDIÇÂO que enquanto I for MENOR que 5 INCREMENTE 1 ao valor de I que
  iniciará o laço com valor 0.
* na terceira linha ele somará o valor da variável VALOR ao valor de I.
* na ultima linha imprimirá o valor atual de VALOR.

 */

/*
Ex 2.

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a.
        imprimirá o valor de NUMERO SE for MAIOR que 18.

// b.
        Seria suficiente, apenas deveria ser removida a condição IF.

 */

//      Escrita de código

/* 
Ex 3.
*/

           const arraOriginal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // a.
//         for(let valor of arraOriginal) {
//                 console.log(valor)
//         }

// b.
//         console.log(valor / 10)
//         }

// // c.
//         let arrayPar = []
//         for (let valor of arraOriginal) {
//                 if (valor % 2 === 0) {
//                 arrayPar.push(valor)

//                 console.log(arrayPar)
//         }
// }

// d.
        let indice = 0
        let arrayDaQuestaoD = [0, 1, 2, 3, 4, 5, 6, 7, 8, 1]
        for(indice of arrayDaQuestaoD) {
                if(indice <= arrayDaQuestaoD.length) {

                        console.log(`O elemento do índex ${arrayDaQuestaoD[indice]} é ${indice}`)
                }
}