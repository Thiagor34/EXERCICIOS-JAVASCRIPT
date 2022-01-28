function verificar() {
    var inNumero = document.getElementById("inNumero")
    var outResultado = document.getElementById("outResultado")

    var numero = Number(inNumero.value)

    if (numero == 0 || isNaN(numero)) {
        alert("Favor insira um número válido!")
        inNumero.focus()
        return
    }

    var resto = numero % 2

    if (resto == 0) {
        outResultado.textContent = `O número ${numero} é Par!`
    } else {
        outResultado.textContent = `O número ${numero} é Ímpar!`
    }
}
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificar)