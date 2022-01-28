function gerarCracha() {
    var inNome = document.getElementById("inNome")
    var outResposta = document.getElementById("outResposta")

    var nome = inNome.value

    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Inserir um nome antes de continuar")
        inNome.focus()
        return
    }

    var pri = nome.indexOf(" ")
    var ult = nome.lastIndexOf(" ")

    var cracha = nome.substr(0, pri) + nome.substr(ult)

    outResposta.textContent = "Crachá: " + cracha


}
var btGerar = document.getElementById("btGerar")
btGerar.addEventListener("click", gerarCracha)