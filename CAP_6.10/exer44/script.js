function criptografar() {
    var inMsg = document.getElementById("inMsg")
   
    var msg = inMsg.value

    if (msg == "") {
        alert("Escreva uma mensagem para criptografar.")
        inMsg.focus()
        return
    }
    
    var tam = msg.length
    var lista = ""
   
    for (var i = 1; i < tam ; i = i + 2) {
        lista += msg.charAt(i)
    }

    for (var i = 0; i < tam; i = i +2) {
        lista += msg.charAt(i) 
    }

    document.getElementById("outResposta").textContent = lista


}
var btCript = document.getElementById("btCript")
btCript.addEventListener("click", criptografar)

function descriptografar() {
    var inMsg = document.getElementById("inMsg")

    var msg = inMsg.value

    if (msg == "") {
        alert("informe a mensagem para descriptografar.")
        inMsg.focus()
        return
    }
var tam = msg.length
var metade = Math.floor(tam / 2)
var lista = ""

if (tam % 2 == 0) {
    for (var i = metade; i < tam; i++) {
        lista += msg.charAt(i)
        lista += msg.charAt(i - metade)
    }
} else {
    for (var i = metade; i < tam - 1; i++) {
        lista += msg.charAt(i)
        lista += msg.charAt(i - metade)
    }
    lista += msg.charAt(i)
}

document.getElementById("outResposta").textContent = lista  

}
var btDescript = document.getElementById("btDescript")
btDescript.addEventListener("click", descriptografar)