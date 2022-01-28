function exibir() {
    var inHora = document.getElementById("inHora")
    var outResposta = document.getElementById("outResposta")

    var hora = Number(inHora.value)

    if (hora == 0 || isNaN(hora)) {
        alert(`Digite um valor válido`)
        inHora.focus()
        return
    }
    var franca = hora + 5

    if (hora < 19) {
        var resultado = franca
        
    } else {
        var resultado = franca - 24
    }

    outResposta.textContent = `Hora na França: ${resultado}`
}