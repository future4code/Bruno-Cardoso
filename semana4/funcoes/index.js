// EXEMPLO 1

// function dizOi() {
//     console.log("oi")
// }

// dizOi()


// EXEMPLO 2

// ------------------------------------------- EXEMPLO DE FUNCAO NOMEADA -----------------

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)

// function somaDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }




// ------------------------------------------- EXEMPLO DE FUNCAO NÃO NOMEADA -----------------


// const somaDoisNumeros = function(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)



// ------------------------------------------- EXEMPLO DE ARROW FUNCTION (FUNCAO FLECHA) -----------------


// const somaDoisNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }


// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)




// ------------------------------------------- EXERCÍCIO 1 -----------------

// function verificaArray(arrayDeParametro) {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length 
// }


// ------------------------------------------- EXERCÍCIO 2 -----------------


// const verificaTamanhoDoArray = (arrayDeParametro) => {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length
// }

// const profs = ["chijo", "paulinha", "sot", "caio", "severo"]

// const tamanhoDoArray = verificaTamanhoDoArray(profs)




// -------------------------------------------

// Exercícios de interpretação

/*
Ex 1.
*/

// function minhaFuncao(variavel) {
//     return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a. Será impresso os resultados da multiplicação de 2 e 10. que são 10 e 50

// b. Apareceriam os resultados da mesma forma devido ao return que dá o comando de output dentro da função.

/*
Ex 2.
*/

// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// a. seriam impressas as duas primeiras posições do array "Darvas" "Goli".

// b. Será impresso "Amanda" "Caio".

/*
Ex 3.
*/

// const metodo = (array) => {
//     let arrayFinal = [];

//     for (let x of array) {
//         if (x % 2 === 0) {
//             arrayFinal.push(x * x)
//         }
//     }
// }

// extrai numeros pares de um array e passa para o outro e eu daria o numero de multiplicaNumerosPares


// Exercícios de escrita de código

/*
Ex 4.
*/

// a.
function minhasInfos() {
    console.log("Eu sou o Bruno, moro em São João del Rei e sou estudande na Labenu")
}

minhasInfos()

// b.
function infosPessoais(nome, idade, endereco, ehEstudante) {
    nome = String(prompt("Qual o seu nome?"))
    idade = Number(prompt("Qual a sua idade?"))
    endereco = String(prompt("Qual o seu endereço?"))
    ehEstudante = Boolean(confirm("Você estuda?"))

    return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${ehEstudante}`)
}

console.log(infosPessoais())


/*
eX 5.
*/

// a.
function somarDoisNumeros(numero1, numero2) {
    const somaDosParametros = numero1 + numero2
    return somaDosParametros
}

console.log(somarDoisNumeros(125647871565, 454588454545))

// b.
function ehMaiorOuIgual(numero1, numero2) {
    const numeros = numero1 >= numero2
    return numeros
}

console.log(ehMaiorOuIgual(20, 10))

// c.
function umaMentiraDita10VezesValeMaisQueUmaVerdade(umaMentira) {
    for (let i = 0; i < 10; i++) {
        console.log(umaMentira)
    }
}

console.log(umaMentiraDita10VezesValeMaisQueUmaVerdade("O céu é vermelho"))

/*
Ex 6.
*/

function verificaQuantidadeDeNumerosDoArray(arrayDeParametro) {
    for (const numero of arrayDeParametro) {
    }
    return arrayDeParametro.length

}

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function verificaArrey(arrayrecebido){
    //     return arrayrecebido.length
    // }
    // const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    // const quantidadeDeElementos = verificaArrey(array)
    // console.log("Quantidade de elementos é:", quantidadeDeElementos)