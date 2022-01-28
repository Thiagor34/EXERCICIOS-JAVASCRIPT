function mostrar() {
    var inAluno = document.getElementById("inAluno")
    var inNota1 = document.getElementById("inNota1")
    var inNota2 = document.getElementById("inNota2")
    var outMedia = document.getElementById("outMedia")
    var outSituacao = document.getElementById("outSituacao")

    var aluno = inAluno.value
    var nota1 = Number(inNota1.value)
    var nota2 = Number(inNota2.value)
    var media = (nota1 + nota2) / 2

    outMedia.textContent = `Média das notas: ${media.toFixed(2)}`

    if (media >= 7) {
        outSituacao.textContent = `Parabéns ${aluno}, Você foi aprovado(a)!`
        outSituacao.style.color = "blue"
    } else { 
        outSituacao.textContent = `Ops.. Você foi reprovado!`
        outSituacao.style.color = "red"
    }
}
