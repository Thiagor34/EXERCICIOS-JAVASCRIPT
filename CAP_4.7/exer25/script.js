function repetir() {
    var inFruta = document.getElementById("inFruta")
    var inNumero = document.getElementById("inNumero")
    var outRepeticao = document.getElementById("outRepeticao")

    var fruta= inFruta.value
    var numero = Number(inNumero.value)

    if (fruta == 0 || numero == 0 || isNaN(numero)) {
        alert("Favor inserir dados para continuar..")
        inFruta.focus()
        return
    }
    
    for (var i = 1; i <= numero; i++) {
    
    outRepeticao.textContent += fruta + "*"
    }

}
var btRpetir = document.getElementById("btRepetir")
btRpetir.addEventListener("click", repetir)