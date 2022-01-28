function verificarFrase() {
    var inFrase = document.getElementById("inFrase")
    var outResposta = document.getElementById("outResposta")

    var frase = inFrase.value.toUpperCase()

    if (frase == "") {
        alert("digite uma frase para continuar")
        inFrase.focus()
        return
    }

    var frase2 = frase.replace(/ /g,"")   // retira os espaços em branco da frase
    var tam = frase2.length

    var iguais = true

    for (var i = 0; i < tam / 2; i++) {  // for repete até a metade (compara as primeiras letras com as últimas)
        if (frase2[i] != frase2[tam - 1 - i]) {
            iguais = false
            break
        }
    }

    if (iguais) {
        outResposta.textContent = frase + " É um Palindromo"
    } else {
        outResposta.textContent = frase + " Não é um Palindromo"
    }



}
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificarFrase)