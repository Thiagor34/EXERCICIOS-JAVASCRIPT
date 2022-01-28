var itens = []                                      //Vetor global para armazenar os itens do pedido

function trocarItem() {
    var inPizza = document.getElementById("inPizza")
    var inBebida = document.getElementById("inBebida")


    if (rbPizza.checked) {
        inBebida.className = "oculta"               //oculta select das bebidas
        inPizza.className = "exibe"                 //exibe select das pizzas
    } else {
        inPizza.className = "oculta"                //oculta as pizzas
        inBebida.className = "exibe"                //exibe as bebidas
    }
}
var rbPizza = document.getElementById("rbPizza")
rbPizza.addEventListener("change", trocarItem)

var rbBebida = document.getElementById("rbBebida")
rbBebida.addEventListener("change", trocarItem)

function mostrarNumSabores() {
    if (rbPizza.checked) {
        var pizza = inPizza.value
        var num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4
        inDetalhes.placeholder = "Até " + num + " Sabores"
    }
}
var inDetalhes = document.getElementById("inDetalhes")
inDetalhes.addEventListener("focus", mostrarNumSabores)

inDetalhes.addEventListener("blur", function() {
    inDetalhes.placeholder = ""                     //Limpa a dica de preenchimento
})

inDetalhes.addEventListener("keypress", function (tecla){   //cria função de tecla pressionada
    if (tecla.key == 13) {
        adicionarItem()
    }
})

function adicionarItem() {
    var inPizza = document.getElementById("inPizza")
    var inBebida = document.getElementById("inBebida")
    var outPedido = document.getElementById("outPedido")

if (rbPizza.checked) {
    var num = inPizza.selectedIndex                 //obtem nº item selecionado
    var produto = inPizza.options[num].text         //texto do item selecionado
} else {
    var num = inBebida.selectedIndex
    var produto = inBebida.options[num].text
}

var detalhes = inDetalhes.value                     //Conteudo do inDetalhes
itens.push(produto + " (" + detalhes + ")")          //Adiciona ao vetor
outPedido.textContent = itens.join("\n")            //Exibe em outPedidos
limparCampos()

}
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarItem)

function limparCampos() {
    rbPizza.checked = true
    inBebida.className = "oculta"
    inPizza.className = "exibe"
    inPizza.selectedIndex = 0
    inDetalhes.value = ""
    rbPizza.focus()
}
