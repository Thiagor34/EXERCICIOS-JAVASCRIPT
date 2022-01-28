function gerarCitacao() {
    var inNome = document.getElementById("inNome")
    var outResposta = document.getElementById("outResposta")
    
    var nome = inNome.value

    if (nome == "" || nome.indexOf(" ") == -1){
        alert("Digitar nome completo")
        inNome.focus()
        return
    }

    var partes = nome.split(" ")
    var citacao = ""
    var tam = partes.length

    for (var i = 0; i < tam - 1; i++) {
        citacao += partes[i].charAt(0).toUpperCase() + ". "
    }

    document.getElementById("outResposta").textContent = partes[tam -1].toUpperCase() + "," + citacao 



}
var btGerar = document.getElementById("btGerar")
btGerar.addEventListener("click", gerarCitacao)