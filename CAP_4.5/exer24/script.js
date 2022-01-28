function verificar() {
    var inNum = document.getElementById("inNum")
    var outSaida = document.getElementById("outSaida")

    var num = Number(inNum.value)

    if (num == 0 || isNaN(num)) {
        alert("Digite um número!")
        inNum.focus()
        return
    }

    var contdiv = 0

    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            contdiv++
        }
    }

    if (contdiv == 2) {
        outSaida.textContent = num + " É primo"
    } else {
        outSaida.textContent = num + " Não é primo"
    }

}

var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificar)