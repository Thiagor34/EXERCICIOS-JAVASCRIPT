function deposito() {
    var inValor = document.getElementById("inValor")
    var outDeposito = document.getElementById("outDeposito")
    var outTempo = document.getElementById("outTempo")

    inValor.textContent = ""
    outDeposito.textContent = ""
    outTempo.textContent = ""

    var valor = Number(inValor.value)

    if (valor == 0 || isNaN(valor)) {
        alert("Deposito inferior ao mínimo...")
        inValor.focus()
        return
    }

    if (valor >= 1 && valor <= 1.75) {
        var troco = valor - 1
        outTempo.textContent = `Tempo: 30min`
        outDeposito.textContent = `Troco R$: ${troco.toFixed(2)}`
    } else if (valor > 1.76 && valor < 3) {
        var troco = valor - 1.75
        outTempo.textContent = `Tempo: 60min`
        outDeposito.textContent = `Troco R$: ${troco.toFixed(2)}`
    } else {
        var troco = valor - 3
        outTempo.textContent = `Tempo: 120min`
        outDeposito.textContent = `Troco R$: ${troco.toFixed(2)}`
    }

}

var btDeposito = document.getElementById("btDeposito")
btDeposito.addEventListener("click", deposito)   

