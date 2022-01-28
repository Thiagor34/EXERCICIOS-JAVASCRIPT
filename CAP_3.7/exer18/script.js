function velocidade() {
    var inVpermitida = document.getElementById("inVpermitida")
    var inVcondutor = document.getElementById("inVcondutor")
    var outVelocidade = document.getElementById("outVelocidade")

    var vPermitida = Number(inVpermitida.value)
    var vCondutor = Number(inVcondutor.value)

    if (vCondutor <= vPermitida) {
        outVelocidade.textContent = `Sem multa, Velocidade Permitida!`
        outVelocidade.style.color = "green"
    } else if (vCondutor <= (vPermitida * 1.2)) {
        outVelocidade.textContent = `Multa Leve, Cuidado!`
        outVelocidade.style.color = "orange"
    } else {
        outVelocidade.textContent = `Multa Grave!`
        outVelocidade.style.color = "red"
    }

}

var btVelocidade = document.getElementById("btVelocidade")
btVelocidade.addEventListener("click", velocidade)