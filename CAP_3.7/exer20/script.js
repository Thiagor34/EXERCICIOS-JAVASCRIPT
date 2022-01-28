function verificar() {
    var inLa = document.getElementById("inLa")
    var inLb = document.getElementById("inLb")
    var inLc = document.getElementById("inLc")
    var outTriang = document.getElementById("outTriang")
    var outTipo = document.getElementById("outTipo")

    var ladoa = Number(inLa.value)
    var ladob = Number(inLb.value)
    var ladoc = Number(inLc.value)

    if (ladoa == 0 || isNaN(ladoa) || ladob == 0 || isNaN(ladob) || ladoc == 0 || isNaN(ladoc)) {
        alert("Digite valores válidos")
        inLa.focus()
        return
    }

    if (ladoa > (ladob + ladoc) || ladob > (ladoa + ladoc) || ladoc > (ladob + ladoa)) {
        alert(`Os lado não podem formar um triângulo`)
    } 
    var tipo = ""

    if (ladoa == ladob && ladoa == ladoc) {
        var tipo = "Equilátero"
        outTriang.textContent = "Os lados podem forma um Triângulo."
        outTipo.textContent = `Tipo: ${tipo}`
    } else if (ladoa != ladob && ladoa != ladoc && ladob != ladoc) {
        var tipo = "Escaleno"
        outTriang.textContent = "Os lados podem forma um Triângulo."
        outTipo.textContent = `Tipo: ${tipo}`
    } else {
        var tipo = "Isósceles"
        outTriang.textContent = "Os lados podem forma um Triângulo."
        outTipo.textContent = `Tipo: ${tipo}`
        
    }


}

var btLado = document.getElementById("btLado")
btLado.addEventListener("click", verificar)