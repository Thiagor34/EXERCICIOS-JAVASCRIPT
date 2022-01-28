var ultNoticias = []

function adicionarNoticias() {
    var inNoticia = document.getElementById("inNoticia")
    var noticia = inNoticia.value

    if (noticia == "") {
        alert("Informar a notícia antes de adicionar..")
        inNoticia.focus()
        return
    }

    ultNoticias.push({noticia: noticia})

    inNoticia.value = ""
    inNoticia.focus()

    listarContador()
  
}
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarNoticias)

var contador = 1

function listarContador() {

    if(ultNoticias.length != 0) {

    listaCont = "Notícias Cadastradas: " + contador++
  
    }

    document.getElementById("outContador").textContent = listaCont

}


function listarNoticias() {
    if (ultNoticias.length == 0) {
        alert("Não há notícias para listar")
        inNoticia.focus()
        return
    } else {
       var qtd = prompt("Quantas notícias deseja listar?")
    }

    var inverso = ultNoticias.slice()
    inverso.reverse()

    var resumo = ""
    var posicao = contador - 1

    if (qtd <= inverso.length) {
        for (var i = 0; i < qtd; i++) {    
            resumo+= posicao +" ª - " + inverso[i].noticia + "\n"
            posicao--
    }
  
} else {
    alert("Digite um igual ou menor ao de notícias cadastradas!")
    return
}

    document.getElementById("outLista").textContent = resumo

    
}
var btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarNoticias)


