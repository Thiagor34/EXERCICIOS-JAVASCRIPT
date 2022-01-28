var mega = []

function sortearMega () {
    var inNumero = document.getElementById("inNumero")
    var numero = Number(inNumero.value)

    if (numero == 0 || numero > 60 || isNaN(numero)) {
        alert("Digite um número entre 1 e 60 para continuar!")
        inNumero.focus()
        return
    }
    if (numero == mega.length) {
        alert("você já digitou esse número")
        inNumero.focus()
        return
    }

    mega.push({numero: numero})

    inNumero.value = ""
    inNumero.focus()

    listarNumeros()


}
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", sortearMega)

function listarNumeros () {
    if (mega.length == 0) {
        alert("Não há números para listar..")
        inNumero.focus()
        return
    }

     var lista = ""

    for (var i = 0; i < mega.length; i++) {
        lista += "{" + mega[i].numero + "}"
    }
     
    document.getElementById("outNum").textContent = lista
}
var btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarNumeros)

function jogarMega () {
    if (mega.length == 0) {
        alert("Não há números para sortear")
    }

    var sorteado = ""
    var resultado = ""
    var aux = ""

   
    for (var i = 1; i <= 6; i++) {
           sorteado = Math.floor(Math.random() * mega.length)
           aux = sorteado
           resultado += "{" + aux + "}"     
        
}

document.getElementById("outNum").textContent = resultado

}
    
var btJogar = document.getElementById("btJogar")
btJogar.addEventListener("click", jogarMega)

