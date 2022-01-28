function verificar() {
    var inNum = document.getElementById("inNum")
    var outResposta = document.getElementById("outResposta")
    var outPer = document.getElementById("outPer")

    var num = Number(inNum.value)

    if (num == 0 || isNaN(num)) {
        alert("Digite um Número..")
        inNum.focus()
        return
    }

    var i = 1
    var resultado = ""
    var aux = ""
    var total = ""

    for (var i = 1; i < num; i++) {
  
    if (i <= num) {
        if (num % i == 0) {
            aux = i
            total = total + " " + i
            resultado = Number(resultado) + Number(aux)
        }        
}
    outResposta.textContent = `Divisores do nº ${num}: ${total} (Soma:${resultado})`

    if (resultado == num) {
        outPer.textContent = `${num} É um número Perfeito!`
    } else {
        outPer.textContent = `${num} Não é um número Perfeito!`
    }

}

}

var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificar)