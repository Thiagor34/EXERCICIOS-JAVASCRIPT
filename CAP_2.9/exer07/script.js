function calcular() {
    
    var inVeiculo = document.getElementById("inVeic")
    var inPreco = document.getElementById("inPrec")
    var outVeic = document.getElementById("outVeic")
    var outEntr = document.getElementById("outEntr")
    var outParc = document.getElementById("outParc")

    var veiculo = inVeiculo.value
    var preco = Number(inPreco.value)
    var entrada = preco * 0.50
    var parcela = (preco * 0.50) / 12
  
    outVeic.textContent += `Promoção: ${veiculo}`
    outEntr.textContent += `Entrada: R$ ${entrada.toFixed(2)}`
    outParc.textContent += `+ 12x de: R$ ${parcela.toFixed(2)}`


}