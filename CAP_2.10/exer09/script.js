function mostrar() {

    var inMedicamento = document.getElementById("inMedicamento")
    var inPreco = document.getElementById("inPreco")
    var outResm = document.getElementById("outResm")
    var outResp = document.getElementById("outResp")

    var medicamento = inMedicamento.value
    var preco = Number(inPreco.value)
    var resultado = Math.floor(preco * 2)

    outResm.textContent = `Promoção de ${medicamento}`
    outResp.textContent = `Leve 2 unidades por: R$ ${resultado}`
   
}