function criar() {
    var inNum = document.getElementById("inNum")
    var outEstrelas = document.getElementById("outEstrelas")

    var num = Number(inNum.value)

    if (num == 00 || isNaN(num)) {
        alert("Favor digitar um número...")
        inNum.focus()
        return
    }

    var resposta = ""
    var incremento = ""

    for (var i = 1; i <= num; i++) {
         incremento = "1"
          
        if (i <= num) {
            resposta = resposta + incremento + "\n"
        }
    }

    outEstrelas.textContent = resposta
}
var btCriar = document.getElementById("btCriar")
btCriar.addEventListener("click", criar)