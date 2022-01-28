var resultado = []

function adicionarCandidato () {
    var inCandidato = document.getElementById("inCandidato")
    var inAcertos = document.getElementById("inAcertos")

    var candidato = inCandidato.value
    var acertos = Number(inAcertos.value)

    if (candidato == "" || acertos == 0 || isNaN(acertos)) {
        alert("Verificar dados!")
        inCandidato.focus()
        return
    }

    resultado.push({candidato: candidato, acertos: acertos})

    inCandidato.value = ""
    inAcertos.value = ""
    inCandidato.focus()

    listarCandidatos()

}
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarCandidato)

function listarCandidatos() {
    if (resultado.length == 0) {
        alert("Não há candidatos para listar...")
        return
    }

    var resumo = ""

    for (var i = 0; i < resultado.length; i++) {
        resumo += resultado[i].candidato + " - " + resultado[i].acertos + " Acertos \n"
    }

    document.getElementById("outRes").textContent = resumo
      
}
var btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarCandidatos)

function resumirAprovados () {
    if (resultado.length == 0) {
        alert("Não há dados para mostrar..")
        return
    } else {
        var aprovacao = prompt("Digite o número de acertos para aprovação: ")
    }

    var lista = ""

    for (var i = 0; i < resultado.length; i++) {
        if (resultado[i].acertos >= aprovacao) {
            lista += resultado[i].candidato + " - " + resultado[i].acertos + " Acertos \n"
        }
    }

    document.getElementById("outRes").textContent = lista

}
var btAprovados = document.getElementById("btAprovados")
btAprovados.addEventListener("click", resumirAprovados)
