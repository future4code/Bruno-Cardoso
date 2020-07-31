// Interpretação de código

/* 
Ex 1.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)

a. false
b. false
c. false
e. boolean
 */

/*
Ex 2.

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)


a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

*/

// Escrita de código

/* 
Ex 1.
*/

// a.
        let idadeUsuario = prompt("Qual a sua idade usuário?")
        let respostaDoUsuario = Number(idadeUsuario)

// b.
        let melhorAmigo = prompt("Qual a sua idade mano?")
        let respostaDoMelhorAmigo = Number(melhorAmigo)

// c.   

        let comparaIdades = respostaDoUsuario > respostaDoMelhorAmigo
        console.log("Sua idade é maior do que a do seu melhor amigo?", comparaIdades)


// d.
        let diferencadeIdades = respostaDoMelhorAmigo - respostaDoUsuario
        console.log(diferencadeIdades)


/*
Ex 2.
*/

// a.
        let numeroParDoUsuario = prompt("Olá usuário me informe um numero par: ")
        let respostaDoNumeroPar = Number(numeroParDoUsuario)

// b.
        let restodaDivisao = respostaDoNumeroPar % 2
        console.log("O resto desta divisão é : ", restodaDivisao)

// c. O resto dos números pares será 0
// d. O resto dos números impares será 1


/*
Ex 3.
*/

// a.
        let listaDeTarefas = []

// b.
        let tarefa1DoUsuario = prompt("Qual a sua primeira tarefa?")
        let tarefa2DoUsuario = prompt("Qual a sua segunda tarefa?")
        let tarefa3DoUsuario = prompt("Qual a sua terceira tarefa?")

// b.
        listaDeTarefas.push(tarefa1DoUsuario)    
        listaDeTarefas.push(tarefa2DoUsuario)    
        listaDeTarefas.push(tarefa3DoUsuario)
// c.
        console.log(listaDeTarefas)

// d.
        let tarefaConcluida = prompt("Digite 0 se ja realizou a primeira tarefa, 1 a segunda ou 2 para a terceira")
        
// e.
        let valorDigitado = listaDeTarefas[tarefaConcluida]
        listaDeTarefas.splice(valorDigitado, 1)

// f.
        console.log(listaDeTarefas)


/*
Ex 4.
*/

// a.
        let nomeDoUsuario = prompt("Qual o seu nome?")
        let emailDoUsuario = prompt("Qual o seu e-mail?")

        let msgBoasvindas = "O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. " + " Seja bem-vinda(o), " + nomeDoUsuario + "!"
<<<<<<< HEAD
        console.log(msgBoasvindas)





    


=======
        console.log(msgBoasvindas)
>>>>>>> c15d6a8f8d5975f812c98fea88aba0abc061af40
