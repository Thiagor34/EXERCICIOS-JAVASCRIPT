function calcular() {
    var inData = document.getElementById("inData")
    var inValor = document.getElementById("inValor")
    var outResposta = document.getElementById("outResposta")

    var data = inData.value
    var valor = Number(inValor.value)

    if (valor == 0 || isNaN(valor) || data == "") {
        alert("Favor informar data e valor")
        inData.focus()
        return
    }

    var hoje = new Date()
    var vencimento = new Date()

    var partes = data.split("-")
    vencimento.setDate(Number(partes[2]))
    vencimento.setMonth(Number(partes[1]) + 2)
    vencimento.setFullYear(Number(partes[0]))

    var vencimento2 = vencimento - hoje
    
    var resumo = ""

    var dias90 = Math.round(vencimento2 / 86400000)

    var dia = vencimento.getDate()
    var mes = vencimento.getMonth() + 1
    var ano = vencimento.getFullYear()

    if (dias90 <= 90) {
        resumo += "Com 20% de desconto para pgto até " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano + "\nValor com desconto R$:" + (valor * 0.80).toFixed(2)  
    }

    document.getElementById("outResposta").textContent = resumo

}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)