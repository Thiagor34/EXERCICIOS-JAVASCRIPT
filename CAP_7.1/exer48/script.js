function exibirSituacao(nota, media) {
    if (nota >= media) {
        alert("Aprovado")
    } else {
        alert("Reprovado")
    }
}

var prova1 = Number(prompt("Qual Nota: "))

exibirSituacao(prova1, 7)