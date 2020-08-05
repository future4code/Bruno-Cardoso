function criarTarefa() {
    // recebendo os valores do input ao clicar
    let recebendoTarefa = document.getElementById("tarefa")
    let valorDoInput = recebendoTarefa.value
    console.log(valorDoInput)

    //selecionando os dias da semana e recebendo o retorno
    let seletorDosDias = document.getElementById("dias-semana")
    let dias = seletorDosDias.value
    console.log(dias)

    //imprimir a tarefa no dia da semana selecionado


    dias = document.getElementById("domingo")
    dias.innerHTML += `${valorDoInput}`
}