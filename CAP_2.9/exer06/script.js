function mostrar() {
    var inTitulo = document.getElementById("intit")
    var inDuracao = document.getElementById("indur")
    var outResp = document.getElementById("outRes")

    var titulo = inTitulo.value
    var duracao = Number(inDuracao.value)

    var horas = Math.floor(duracao / 60)
    var minutos = duracao % 60

    outResp.textContent = `${horas} Hora(s) e ${minutos} minuto(s)`
    
}