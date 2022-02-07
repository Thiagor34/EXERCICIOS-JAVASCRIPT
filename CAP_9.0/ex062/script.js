function adicionarTarefa() {
    var inTarefa = document.getElementById("inTarefa")

    var tarefa = inTarefa.value

    if (tarefa == "") {
        alert("Informar uma Tarefa...")
        inTarefa.focus
        return
    }

    //cria referência ao elemendo divQuadro (local onde tag h5 será inserida)

    var divQuadro = document.getElementById("divQuadro")
    var h5 = document.createElement("h5")                   //cria o elemento HTML h5
    var texto = document.createTextNode(tarefa)             //cria um texto
    h5.appendChild(texto)                                      //define o texto
    divQuadro.appendChild(h5)                               //.. e que h5 será filho de divQuadro

    inTarefa.value = ""
    inTarefa.focus()
}
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarTarefa)

function selecionarTarefa() {
    var h5 = document.getElementsByTagName("h5")        //obtém tags h5 da página
    var numH5 = h5.length                               //obtém o número de tags

    if (numH5 == 0) {
        alert("Não há tarefas para selecionar")
        return
    }

    var aux = -1                //variável auxiliar para indicar linha selecionada

    //percorre a lista de elementos h5 inseridos na página

    for (var i = 0; i < numH5; i++) {
        //se tag é da class tarefaSelecionada (está selecionada)
        if (h5[i].className == "tarefaSelecionada") {
            h5[i].className = "tarefaNormal"        //troca para normal
            aux = i                                 //muda valor da variavel aux
            break
        }
    }
    //se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux == numH5 - 1) {
        aux = -1
    }
    h5[aux + 1].className = "tarefaSelecionada"     //muda estilo da próxima tag h5
}
var btSelecionar = document.getElementById("btSelecionar")
btSelecionar.addEventListener("click", selecionarTarefa)

function retirarSelecionada() {
    //cria referência ao elemento que irá perder um filho
    var divQuadro = document.getElementById("divQuadro")
    var h5 = document.getElementsByTagName("h5")
    var numH5 = h5.length

    var aux = -1

    for (var i = 0; i < numH5; i++) {
        //verifica classNameda tag h5
        if (h5[i].className == "tarefaSelecionada")
        aux = i
        break
    }
    //se não há tarefa selecionada (ou se lista vazia)
    if (aux == -1) {
        alert("Selecione uma tarefa para removê-la...")
        return
    }
    //solicita confirmação de exclusão
    if (confirm("Confirma a exclusão de '" + h5[aux].textContent + "'?")) {
        divQuadro.removeChild(h5[aux])
    }
}
var btRetirar = document.getElementById("btRetirar")
btRetirar.addEventListener("click", retirarSelecionada)

function gravarTarefas() {
    var h5 = document.getElementsByTagName("h5")
    var numH5 = h5.length

    if (numH5 == 0) {
        alert("não há tarefas para serem salvas")
        return
    }
    var tarefas = ""
    //percorre a lista de elementos h5 inseridos na página
    for(var i = 0; i < numH5; i++) {
        tarefas += h5[i].textContent + ";"      //acumula conteúdo de cada h5
    }
    //grava as tarefas em localStorage, removendo o último
    localStorage.setItem("tarefasDia", tarefas.substr(0, tarefas.length - 1))
    //confere se os dados foram armazenados em localStorage
    if (localStorage.getItem("tarefasDia")) {
        alert("Ok! Tarefas Salvas")
    }
}
var btGravar = document.getElementById("btGravar")
btGravar.addEventListener("click", gravarTarefas)

function recuperarTarefas() {
    if (localStorage.getItem("tarefasDia")) {
        //cria um vetor com a lista de tarefas
        var tarefas = localStorage.getItem("tarefasDia").split(";")
    
    //cria referência ao divQuadro
    var divQuadro = document.getElementById("divQuadro")

    for (var i = 0; i < tarefas.length; i++) {
        var h5 = document.createElement("h5")
        var texto = document.createTextNode(tarefas[i])
        h5.appendChild(texto)
        divQuadro.appendChild(h5)
    }
    }
}
recuperarTarefas()