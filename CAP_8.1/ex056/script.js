function trocarClube() {
    //cria referência aos elementos da página
    var imgClube = document.getElementById("imgClube")
    var divTitulo = document.getElementById("divTitulo")

    var clube           //define variável que irá receber o nome do clube

    //verifica qual radiobutton está selecionado

    if(rbAvai.checked) {
        clube = "Avai"
    } else if (rbFigueira.checked) {
        clube = "Figueirense"
    } else {
        clube = "Internacional"
    }

    //define as classes de divTitulo: row e cores do clube

    divTitulo.className = "row cores" + clube

    //modifica a imagem de acordo com a seleção do cliente

    imgClube.src = "img/" + clube.toLowerCase() + ".png"
    imgClube.className = "exibe"            //exibe a imagem
    imgClube.alt = "Símbolo do " + clube    //modifica o atributo alt

    //salva no navegador a escolha do cliente
    localStorage.setItem("clube", clube)
}

//captura os elementos do radio button

var rbAvai = document.getElementById("rbAvai")
var rbFigueira = document.getElementById("rbFigueira")
var rbInter = document.getElementById("rbInter")

//associa ao evento change a function trocarClube

rbAvai.addEventListener("change", trocarClube)
rbFigueira.addEventListener("change", trocarClube)
rbInter.addEventListener("change", trocarClube)

function verificarClube() {
    //se já estiver salvo algum clube
    if (localStorage.getItem("clube")) {
        var clube = localStorage.getItem("clube")

        //conforme o clube, marca um dos elementos do input type radio

        if (clube == "Avai") {
            rbAvai.checked = true
        } else if (clube == "Figueirense") {
            rbFigueira.checked = true
        } else {
            rbInter.checked = true
        }

        trocarClube()           //chama a function que troca a imagem e as cores
    }
}

//chama function que verificar se cliente ja selecionou o clube

verificarClube()
