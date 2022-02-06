function incluirAposta() {

    var inNome = document.getElementById("inNome")
    var inPeso = document.getElementById("inPeso")

    var nome = inNome.value
    var peso = Number(inPeso.value)

    if (nome == "" || peso == 0 || isNaN(peso)) {
        alert("Informe os dados para continuar")
        inNome.focus()
        return
    }

    //chama função que verifica se peso ja foi apostado

    if (verApostaExiste(peso)) {
        alert("Alguém já apostou esse peso, informe outro..")
        inPeso.focus()
        return
    }

    //se houver dados salvos no localStorage

    if (localStorage.getItem("melanciaNome")) {
        //obtem o conteúdo já salvo e acrescenta ";" + dado da aposta
        var melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        var melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso

        //salva os dados em localStorage
        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso)
    } else {                                                //se não é a primeira aposta, não tem ";"
        localStorage.setItem("melanciaNome", nome)
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas()

    inNome.value = ""
    inPeso.value = ""
    inNome.focus()
}
var btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click", incluirAposta)

function verApostaExiste(peso) {
    var existe = false              //valor inicial é false
    
    //se existe algum dado salvo em localStorage...
    if (localStorage.getItem("melanciaPeso")) {
        //obtem seu conteúdo. A string é dividida em itens de vetor a cada ";"
        var pesos = localStorage.getItem("melanciaPeso").split(";")

        //verifica se existe com indexOf()
        if (pesos.indexOf(peso.toString()) >= 0) {
            existe = true
        }
    }
    return existe
}

function mostrarApostas() {
    //cria referência ao alemento que exibe as apostas

    var outApostas = document.getElementById("outApostas")

    //se não há apostas armazenadas em localStorage

    if (!localStorage.getItem("melanciaNome")) {
        //limpa o espaço de exibição das apostas (para quando "limpar apostas")
        outApostas.textContent = ""
        return          //retorna e não executa os comandos abaixo
    }
    //obtém o conteúdo das variáveis salvas no localStorage, separando-as
    //em elementos de vetor a cada ocorrência do ";"
    var nomes = localStorage.getItem("melanciaNome").split(";")
    var pesos = localStorage.getItem("melanciaPeso").split(";")

    var linhas = ""             // irá acumular as linhas a serem exibidas

    //repetição para percorrer todos os elementos do vetor
    for (var i = 0; i < nomes.length; i++) {
        //concatena em linhas os nomes dos apostadores e suas apostas
        linhas += nomes[i] + " - " + pesos[i] + "gr \n"
    }
    //exibe as linhas (altera o conteúdo do elemento outApostas)
    outApostas.textContent = linhas
}
mostrarApostas()

function verificarVencedor() {
    //se não há apostas armazenadas em localStorage
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas")
        return              //retorna e não executa os comandos abaixo
    }

    //solicita o peso correto da melancia
    var pesoCorreto = Number(prompt("Qual o peso correto da Melância?"))

    //se não informou, retorna
    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return
    }

    //obtém os dados armazenados, separando em elementos de vetor
    var nomes = localStorage.getItem("melanciaNome").split(";")
    var pesos = localStorage.getItem("melanciaPeso").split(";")

    //valor inicial para vencedor é o da primeira aposta
    var vencedorNome = nomes[0]
    var vencedorPeso = Number(pesos[0])

    //percorre as apostas
    for (var i = 1; i < nomes.length; i++) {
        //calcula a diferença de peso do Vencedor e da aposta atual
        difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)

        //se a diferença da aposta atual (no for) for menor que a do vencedor
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]             //troca o nome do vencedor
            vencedorPeso = Number(pesos[i])     //troca o peso
        }
    }
    //monsta msg com dados do vencedor
    var mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr"
    mensagem += "\n-------------------------------------"
    mensagem += "\nVencedor: " + vencedorNome
    mensagem += "\nAposta: " + vencedorPeso + "gr"
    alert(mensagem) 
}
var btVencedor = document.getElementById("btVencedor")
btVencedor.addEventListener("click", verificarVencedor)

function limparApostas() {
    if (confirm("Confirma a exclusão de todas as apostas?")) {
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        mostrarApostas()
    }
}
var btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparApostas)