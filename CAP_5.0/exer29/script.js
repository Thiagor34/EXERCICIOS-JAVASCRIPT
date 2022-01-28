var pacientes = []

function adicionar() {
    var inPaciente = document.getElementById("inPaciente")
    var outLista = document.getElementById("outLista")

    var nome = inPaciente.value

    if (nome == "") {
        alert("Informe o nome do paciente...")
        inPaciente.focus()
        return
    }

    // adiciona o nome no final do vetor

    pacientes.push(nome)

    // string para concatenar pacientes
    
    var lista = ""

    // percorre os elementos do vetor

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n"
    }

    // altera o conteudo da lista

    outLista.textContent = lista 

    inPaciente.value = ""
    inPaciente.focus()
}

var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionar)

function urgencia () {
    var inPaciente = document.getElementById("inPaciente")
    var outLista = document.getElementById("outLista")

    var nome = inPaciente.value

    if (nome == "") {
        alert("Informe o nome do paciente com urgência")
        inPaciente.focus()
        return
    }

    pacientes.unshift(nome)
    var lista = ""

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n"
    }

    outLista.textContent = lista

    inPaciente.value = ""
    inPaciente.focus()
}

var btUrgencia = document.getElementById("btUrgencia")
btUrgencia.addEventListener("click", urgencia)

function atender() {
    if (pacientes.length == 0) {
        alert("Não há pacientes para atender.")
        inPaciente.focus()
        return
    }

    var outPaciente = document.getElementById("outPaciente")
    var outLista = document.getElementById("outLista")

    var atender = pacientes.shift()
    outPaciente.textContent = atender

    var lista = ""

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n"
    }

    outLista.textContent = lista
}

var btAtender = document.getElementById("btAtender")
btAtender.addEventListener("click", atender)