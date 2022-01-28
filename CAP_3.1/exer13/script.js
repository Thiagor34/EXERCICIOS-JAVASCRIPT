function calcularPeso() {
    var inNome = document.getElementById("inNome")
    var inAltura = document.getElementById("inAltura")
    var rbMasculino = document.getElementById("rbMasculino")
    var rbFeminino = document.getElementById("rbFeminino")
    var outResposta = document.getElementById("outResposta")

    var nome = inNome.value
    var altura = Number(inAltura.value)
    var masculino = rbMasculino.checked
    var feminino = rbFeminino.checked

    if (nome =="" || (masculino == false && feminino == false)) {
        alert("Por favor, insira nome e selecione o sexo.")
        inNome.focus()
        return
    }

    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, insira a altura corretamente.")
        inAltura.focus()
        return
    }

    if (masculino) {
        var peso = 22 * Math.pow(altura, 2)
    } else {
        var peso = 21 * Math.pow(altura, 2)
    }

    outResposta.textContent = nome +`: Seu peso ideal é ${peso.toFixed(3)} Kg`
}

function limpar() {
    document.getElementById("inNome").value = ""
    document.getElementById("inAltura").value = ""
    document.getElementById("rbMasculino").checked = false
    document.getElementById("rbFeminino").checked = false
    document.getElementById("outResposta").textContent = ""
    document.getElementById("inNome"),focus()
}


