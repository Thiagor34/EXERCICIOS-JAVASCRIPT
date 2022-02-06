function contarVisitas() {
  var outContador = document.getElementById("outContador");

  var contador = 0;

  if (localStorage.getItem("lojaContador")) {
    contador = Number(localStorage.getItem("lojaContador"));
  }

  contador++;

  if (contador == 1) {
    outContador.textContent = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.";
  } else {
    outContador.textContent = "Que bom que você voltou! Esta é a sua visita de número " + contador + " ao nosso site.";
  }

  localStorage.setItem("lojaContador", contador);
}
contarVisitas();

/* 
  É necessário manter as demais funções da página para o correto funcionamento das trocas de clube, bem como,
  para carregar a página com as cores e símbolo do clube salvo em localStorage
*/

// captura as tags input da página
var inputsRadio = document.getElementsByTagName("input");
// percorre os elementos para associar function ao evento change
for (var i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener("change", trocarClube);
}

function trocarClube() {
  //cria referência aos elementos da página
  var imgClube = document.getElementById("imgClube")
  var divTitulo = document.getElementById("divTitulo")

  var clube = ["Avai", "Figueirense", "Internacional"]          //armazena em um vetor a lista de clube

  //percorre os radiobuttons para verificar qual está selecionado

  for (var i = 0; i < 4; i++) {
      if (inputsRadio[i].checked) {       //se selecinado
          var selecao = i                 // armazena indice do radio selecionado
          break                           // e sai da repetição
      }
  }

  if (selecao <= 2) {                                         // se seleção <=2, então torce para time
      divTitulo.className = "row cores" + clube[selecao]      //modifica as cores (divTitulo)
  
  //modifica a imagem de acordo com a seleção do cliente

  imgClube.src = "img/" + clube[selecao].toLowerCase() + ".png"
  imgClube.className = "exibe"            //exibe a imagem
  imgClube.alt = "Símbolo do " + clube    //modifica o atributo alt

  //salva no navegador a escolha do cliente
  localStorage.setItem("clube", clube)

  } else {
      divTitulo.className = "row"
      imgClube.className = "oculta"
      imgClube.alt = ""
      localStorage.removeItem("clube")
  }
}

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
