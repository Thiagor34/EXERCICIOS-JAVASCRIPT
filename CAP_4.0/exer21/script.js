function mostrar() {
    var inNum = document.getElementById("inNum")
    var outTab = document.getElementById("outTab")

    var num = Number(inNum.value)
   
    if (num == 0 || isNaN(num)) {
        alert("Digite um valor para continuar...")
        inNum.focus()
        return
    }

    var resposta = ""

    for (var cont = 0; cont <= 10; cont++) {
        resposta = resposta + `${num} X ${cont} = ${num * cont}` + "\n"
    }
    outTab.textContent = resposta

}

var btMost = document.getElementById("btMost")
btMost.addEventListener("click", mostrar)