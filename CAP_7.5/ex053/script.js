function gerarSenha() {
    var inAluno = document.getElementById("inAluno")
    var outResposta = document.getElementById("outResposta")

    var aluno = inAluno.value

    if (aluno == "" || !validarNome(aluno)) {               //função para validar nome do aluno
        alert("Informe o nome completo do aluno")
        inAluno.focus()
        return
    }

    outResposta.textContent = "Senha Inicial: " + obterSobrenome(aluno) + contarVogais(aluno)
}
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", gerarSenha)

function validarNome(nome) {
    if (nome.indexOf(" ") >= 1) {                           //Se houver espaço no nome, retorna true
        return true
    } else {
        return false
    }
}

function obterSobrenome(nome) {                             //pega a primeira letra depois do último espaço em minusculo
    var ultimoEspaco = nome.lastIndexOf(" ")
    return nome.substr(ultimoEspaco + 1).toLowerCase()
}

function contarVogais(nome) {
    var num = 0
    var letra
    
    for (var i = 0; i < nome.length; i++) {
        letra = nome.charAt(i).toUpperCase()
        
        if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
            num++
        }
    }
    return num < 10 ? "0" + num : num
}

function contarVogais2(nome) {
    var num = 0
    var vogais = "AEIOU"
    var letra

    for (var i = 0; i < nome.length; i++) {
        letra = nome.charAt(i).toUpperCase()
        
        if (vogais.indexOf(letra) >= 0) {
            num++
        }
    }
    return num < 10 ? "0" + num : num
}
