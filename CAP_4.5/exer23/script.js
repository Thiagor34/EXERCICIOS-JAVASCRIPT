var numContas = 0
var valTotal = 0

var resposta = ""

function registrar() {
    var inDesc = document.getElementById("inDesc")
    var inPagar = document.getElementById("inPagar")
    var outConta = document.getElementById("outConta")
    var outTotal = document.getElementById("outTotal")

    var descricao = inDesc.value
    var pagar = Number(inPagar.value)

    if (descricao == 0 || pagar == 0 || isNaN(pagar)) {
        alert("Verifique os campos e digite uma descrição ou valor!")
        inDesc.focus()
        return
    }

    numContas++
    valTotal = valTotal + pagar

    resposta = resposta + descricao + ` - R$:` + pagar.toFixed(2) + "\n"

    outConta.textContent = resposta + "-------------------------"
    outTotal.textContent = numContas + ` Conta(s) - Total R$: ` + valTotal.toFixed(2)

    inDesc.value = ""
    inPagar.value = ""
    inDesc.focus()

}

var btRegis = document.getElementById("btRegis")
btRegis.addEventListener("click", registrar)