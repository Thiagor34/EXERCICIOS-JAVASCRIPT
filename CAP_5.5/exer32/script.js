var criancas = []

function adicionarCriancas() {
    var inNome = document.getElementById("inNome")
    var inIdade = document.getElementById("inIdade")
    
    var nome = inNome.value
    var idade = Number(inIdade.value)

    if (nome == "" || inIdade.value == 0 || isNaN(idade)) {
        alert("Favor inserir corretamente os dados..")
        inNome.focus()
        return
    }

    criancas.push({nome: nome, idade: idade})

    inNome.value = ""
    inIdade.value = ""
    inNome.focus()

    listarCriancas()
}
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarCriancas)

function listarCriancas() {
    if (criancas.length == 0) {
        alert("Não há crianças na lista")
        return
    }

    var lista = ""

    for (var i = 0; i < criancas.length; i++) {
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos \n"
    }

    document.getElementById("outLista").textContent = lista


}
var btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarCriancas)

function resumirLista() {
    if (criancas.length == 0) {
        alert("Não há crianças na lista..")
        return
    }

    var copia = criancas.slice() //criar cópia do vetor crianças

    copia.sort(function (a,b) {return a.idade - b.idade}) // ordena a cópia por idade

    var resumo = ""

    var aux = copia[0].idade   // menor idade do vetor ordenado
    var nome = []              // vetor para inserir nome de cada idade

    for (var i = 0; i <copia.length; i++) { 
        // se é da mesma idade auxiliar, adiciona ao vetor
        if (copia[i].idade == aux ) {
            nome.push(copia[i].nome)
        } else {
        // adiciona ao resumo, dados e nomes inseridos em nomes
        resumo += aux + " ano(s): " + nome.length + " criança(s) - "
        resumo += (nome.length / copia.length * 100).toFixed(2) + "%\n"
        resumo += "(" + nome.join(", ") + ")\n\n"
        
        aux = copia[i].idade     // obtem nova idade na ordem
        nome = []                // limpa o vetor dos nomes 
        nome.push(copia[i].nome) // adiciona o primeiro da nova idade
        }
    }
        // adiciona os nomes da ultima idade ordenada
    resumo += aux + " ano(s): " + nome.length + " crianca(s) - "
    resumo += (nome.length / copia.length *100).toFixed(2) + "%\n"
    resumo += "(" + nome.join(", ") + ")\n\n"

        //altera conteudo da outLista
        document.getElementById("outLista").textContent = resumo
}

var btResumir = document.getElementById("btResumir")
btResumir.addEventListener("click", resumirLista)