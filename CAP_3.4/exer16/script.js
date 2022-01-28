function exibir() {
    var inValor = document.getElementById("inValor")
    var outSaqueCem = document.getElementById("outSaqueCem")
    var outSaqueCinquenta = document.getElementById("outSaqueCinquenta")
    var outSaqueDez = document.getElementById("outSaqueDez")

    outSaqueCem.textContent = ""
    outSaqueCinquenta.textContent = ""
    outSaqueDez.textContent = ""
    
    var valor = Number(inValor.value)

    if (valor == 00 || isNaN(valor)) {
        alert("Digite um valor..")
        inValor.focus()
        return
    }
    
    if (valor % 10 != 0) {
        alert("valor inválido, Notas disponíveis R$10, R$50 e R$100")
        inValor.focus()
        return
    }
    
    var cem = Math.floor(valor / 100)
    var resultado = valor % 100

    var cinquenta = Math.floor(resultado / 50)
    resultado = resultado % 50

    var dez = Math.floor(resultado / 10)
    
    if (cem > 0) {
        outSaqueCem.textContent = `Nota de R$ 100: ${cem} nota(s)`
    }
    if (cinquenta > 0) {
        outSaqueCinquenta.textContent = `Nota de R$ 50: ${cinquenta} nota(s)`
    }
    if (dez > 0) {
        outSaqueDez.textContent = `Nota de R$ 10: ${dez} nota(s)`
    }


}