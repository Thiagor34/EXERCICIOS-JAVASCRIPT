function gerarEmail(){
    var inFuncionario = document.getElementById("inFuncionario")
    var outEmail = document.getElementById("outEmail")

    var funcionario = inFuncionario.value

    if (funcionario == "" || funcionario.indexOf(" ") == -1) {
        alert("Informe o nome completo do Funcionário!")
        inFuncionario.focus()
        return
    }

    var partes = funcionario.split(" ")
    var email = ""                          //vai concatenar
    var tam = partes.length                 //obtem nº de itens do vetor partes
    
    for (var i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0)        //obtem a primeira letra de cada item
    }

    email += partes[tam - 1] + "@empresa.com.br"        //concatena as letras iniciais com a ultima parte do nome 

    outEmail.textContent = "E-mail: " + email.toLowerCase()
    
}
var btGerar = document.getElementById("btGerar")
btGerar.addEventListener("click", gerarEmail)