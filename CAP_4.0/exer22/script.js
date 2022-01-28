function calcular() {
    var inNum = document.getElementById("inNum")
    var outSaida = document.getElementById("outSaida")

    var num = Number(inNum.value)

    if (num == 0 || isNaN(num)) {
        alert("Favor digitar um número...")
        inNum.focus()
        return
    }

    var resposta = num

    for (var i = num -1; i > 0; i--) {
        resposta = resposta + ", " + i
    }
    outSaida.textContent = `Entre ${num} e 1: ` + resposta  
}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)