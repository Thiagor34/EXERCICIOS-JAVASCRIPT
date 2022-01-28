function calcularMedia() {
    if (arguments.length == 0) {
        alert("Informe, no minímo, uma nota")
        return
    }

    var soma = 0                            //vai acumular a soma das notas
    var numNotas = arguments.length         //obtem a quantidade de argumentos

    for (var i = 0; i < numNotas; i++) {    //percorre os argumentos
        soma += arguments[i]                //soma os valores dos argumentos
    }

    var media = soma / numNotas
    alert("Média das notas: " + media.toFixed(1))

}
calcularMedia(5, 7.5, 9, 10)                //exemplos de argumentos