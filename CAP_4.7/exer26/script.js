function previsao() {
    var inChinchilas = document.getElementById("inChinchilas")
    var inAnos = document.getElementById("inAnos")
    var outResposta = document.getElementById("outResposta")

    var chinchilas = Number(inChinchilas.value)
    var anos = Number(inAnos.value)

    if (chinchilas == 0 || anos == 0 || isNaN(chinchilas)) {
        alert("Informar dados..")
        inChinchilas.focus()
        return
    }
    if (chinchilas < 2) {
        alert("O valor mínimo deve ser 2 Chinchilas")
        inChinchilas.focus()
        return
    }

    contador = "1"
    resposta = ""

    for (var i = 1; i <= anos; i++) {
        resposta = resposta + `${contador}º Ano: ` + chinchilas + ` Chinchilas \n`
        contador++
        chinchilas = chinchilas * 3
    }
    outResposta.textContent = resposta

}

var btPrevisao = document.getElementById("btPrevisao")
btPrevisao.addEventListener("click", previsao)