function calcular() {
    var inValor = document.getElementById("inValor")
    var inCliente = document.getElementById("inCliente")
    var outresposta = document.getElementById("resposta")

    var valor = Number(inValor.value)
    var cliente = Number(inCliente.value)
    var resultado = (Math.round(cliente / 15)).toFixed(2) * valor

    outresposta.textContent = `Valor a pagar R$: ${resultado}`
}