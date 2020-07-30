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

        // -------------------------------------- DESAFIOS -------------------------------------------------------

/*
1.
*/


// a.
        let farenheintToKelvin = (77 - 32) * 5/9 + 273.15
                console.log(farenheintToKelvin)

// b.
        let celsiusToFarenheint = (80) * 9/5 + 32
                console.log(celsiusToFarenheint)

// c.
        let celsiusToFarenheint2 = (30) * 9/5 + 32
        let celsiusToKelvin2 = 30 + 273.15

                  console.log(celsiusToFarenheint2, celsiusToKelvin2)

// d.
        let usuarioDecideATemperatura = Number(prompt("Insira os graus Celsius pra converter em Farenheint : "))
        let usuarioQuerFarenheint = (usuarioDecideATemperatura) * 9/5 + 32
                console.log(usuarioQuerFarenheint)

        let usuarioDecideATemperatura = Number(prompt("Insira os graus Celsius pra converter em Kelvin : "))
        let usuarioQuerKelvin = (usuarioDecideATemperatura) + 273.15
                console.log(usuarioQuerKelvin)


/*
2.
*/

// a.
        let consulmoEnergia =  (280 / 24) * 0.05 * 280
                console.log(consulmoEnergia)
        
// b.
        let descontoNaConta = consulmoEnergia * 0.15
        let totalAPagar = consulmoEnergia - descontoNaConta
                console.log(totalAPagar)

/*
3.
*/

// a.
        let poundsToKilograma = 20 / 2.2046
                console.log(`20 lb equivalem à ${libraToKilograma} Kg`)

// b.
        let ozToKilograma = 10.5 / 35.274
                console.log(`10.5oz equivalem à ${ozToKilograma} Kg`)

// c.
        let milesToMeters = 100 / 0.00062137
                console.log(`100mi equivalem a ${milesToMeters} m`)
        
// d.
        let feetToMeters = 50 / 3.2808
                console.log(`50ft equivalem a ${feetToMeters} m`)

// e.
        let galaoToLitros = 103.56 * 3.785
                console.log(`103.56gal equivalem a ${galaoToLitros}`)
        
// f.
        let xicaraToLitros = 450 * 0.24
                console.log(`450 xic equivalem a ${xicaraToLitros} l`)

// f.
        let conversorDeMedidas = Number(prompt("Informe quantas milhas deseja transformar em metros : "))
        let conversao = conversorDeMedidas / 0.00062137
                console.log(conversao)
=======
        console.log(msgBoasvindas)
>>>>>>> c15d6a8f8d5975f812c98fea88aba0abc061af40
