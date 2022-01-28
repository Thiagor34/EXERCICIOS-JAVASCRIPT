var times = []

function adicionarTime () {
    var inClube = document.getElementById("inClube")
    
    var clube = inClube.value

    if (clube == "") {
        alert("Favor informar um clube para continuar..")
        inClube.focus()
        return
    }

    times.push({clube: clube})

    inClube.value = ""
    inClube.focus()

    listarTimes()

}
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarTime)

function listarTimes () {
    if (times.length == 0) {
        alert("Não há times para listar..")
        return
    }

    var lista = ""

    for (var i = 0; i < times.length; i++) {
        lista += times[i].clube + "\n"
    
    }    

    document.getElementById("outTabela").textContent = lista
}
var btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarTimes)

function montarTabela () {
    if (times.length == "") {
        alert("Não há times para montar a Tabela dos Jogos!")
        return
    }

    var copia = times.slice()
    var aux = times.slice()
    copia.reverse()

    var tabela = ""

    if (times.length % 2 != 0) {
        alert("informe um número par de clubes para montar a tabela!")
        inClube.focus()
        return
    }

    for (var i = 0; i < aux.length; i++) {
        tabela += aux[0].clube + " X " + copia[0].clube + "\n"
        
        aux.shift()
        copia.shift()  
    }

    document.getElementById("outTabela").textContent = tabela

}

var btTabela = document.getElementById("btTabela")
btTabela.addEventListener("click", montarTabela)