var total = Number(prompt('Valor total da conta: '))
var vist = total * 0.90
var pra = total/3
alert(`o Valor a pagar a vista é R$ ${vist} ou em 3x de R$ ${pra.toFixed(2)}`)