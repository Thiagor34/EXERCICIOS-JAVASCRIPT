function montarDica() {
    var inFruta = document.getElementById("inFruta")
    var outDica = document.getElementById("outDica")

    var fruta = inFruta.value.toUpperCase()

    if (fruta == "") {
        alert("Opss.. Digite uma fruta!")
        inFruta.focus()
        return
    }

    var resposta = fruta.charAt(0)
    var estrelas = "*"
    var tam = fruta.length

    for (var i = 0; i < tam; i++) {
        if (fruta.charAt(i) == fruta.charAt(0)) {
            resposta += fruta.charAt(0)
        } else {
            resposta += "_"
        }
        estrelas += "*"
    }

    outDica.textContent = resposta
    inFruta.value = estrelas
}
var btMontar = document.getElementById("btMontar")
btMontar.addEventListener("click", montarDica)