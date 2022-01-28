function calcular() {
    var inProduto = document.getElementById("inProduto")
    var inPreco = document.getElementById("inPreco")
    var outresposta = document.getElementById("resposta")
    var outresportaprom = document.getElementById("respostaprom")

    var produto = inProduto.value
    var preco = Number(inPreco.value)
    var resultado = (preco * 2) + (preco * 0.50)

    outresposta.textContent = `${produto} - Promoção: Leve 3 unidades por R$: ${resultado.toFixed(2)}`
    outresportaprom.textContent = `O 3º produto custa apenas: ${preco * 0.50.toFixed(2)}`

}