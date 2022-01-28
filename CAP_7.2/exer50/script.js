function adicionarCarros() {
    var inModelo = document.getElementById("inModelo")
    var inAno = document.getElementById("inAno")
    var inPreco = document.getElementById("inPreco")
    var outClassif = document.getElementById("outClassif")
    var outLista = document.getElementById("outLista")
    
    var modelo = inModelo.value
    var ano = Number(inAno.value)
    var preco = Number(inPreco.value)

    if (modelo == "" || ano == 0 || preco == 0 || isNaN(preco) || isNaN(ano)) {
        alert("Informe os dados corretamente...")
        inModelo.focus()
        return
    }

    var classificacao = classificarVeiculo(ano)
    var precoVenda = calcularVenda(preco, classificacao)

    outClassif.textContent = modelo + " - " + classificacao
    outLista.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2)
    
}
var btClassif = document.getElementById("btClassif")
btClassif.addEventListener("click", adicionarCarros)

function classificarVeiculo(ano) {
    var anoAtual = new Date().getFullYear()
    var classif

    if (ano == anoAtual) {
        classif = "Novo"
    } else if (ano == anoAtual-1 || ano == anoAtual-2) {
        classif = "Seminovo"
    } else {
        classif = "Usado"
    }
    return classif
}

function calcularVenda(valor, status) {
    var prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10
    return prVenda 
}