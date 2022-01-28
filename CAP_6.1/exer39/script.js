var palavra = prompt("Palavra: ")
var tam = palavra.length

var inverso = palavra.charAt(tam-1).toUpperCase()

for (var i = tam-2; i >= 0; i--) {
    inverso += palavra.charAt(i).toLowerCase()
}

alert("Palavra: " + palavra + "\nInvertida: " + inverso)