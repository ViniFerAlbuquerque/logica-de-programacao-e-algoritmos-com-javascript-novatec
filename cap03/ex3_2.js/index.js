const prompt = require("prompt-sync")()
const veiculo = prompt("Veículo: ")
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.5
const parcela = (preco * 0.5) / 12
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de ${entrada.toFixed(2)} `)
console.log(`Incluindo o restante em 12 vezes de R$ ${parcela.toFixed(2)}`)