function calcular() {
    var inQuilo = document.getElementById("inQuilo")
    var inConsumo = document.getElementById("inConsumo")
    var outResposta = document.getElementById("outResposta")

    var quilo = Number(inQuilo.value)
    var consumo = Number(inConsumo.value)

    var resultado = (quilo / 1000) * consumo

    outResposta.textContent = `Valor a pagar: R$ ${resultado.toFixed(2)}`
}