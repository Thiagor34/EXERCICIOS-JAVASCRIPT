function exibir() {
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var numero = Number(inNumero.value)
    var resultado = Math.sqrt(numero)

    if (numero == 0 || isNaN(numero)) {
        alert(`Digite um valor válido ou diferente de zero`)
        inNumero.focus()
        return
    }

    if (resultado == Math.floor(resultado)) {
        outResposta.textContent = `A raiz quadrada é: ${resultado}`
    } else {
        outResposta.textContent = `Não há raiz exata para ${numero}`
    }

    
}