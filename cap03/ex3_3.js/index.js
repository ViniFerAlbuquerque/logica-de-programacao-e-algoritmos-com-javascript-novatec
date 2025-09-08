const prompt = require("prompt-sync")()
const salario = Number(prompt("Salário R$: "))
const tempo = Number(prompt("Tempo do trabalho em anos por favor: "))

const quadrienios = Math.floor(tempo / 4)
const acrescimo = salario * quadrienios * 0.01

console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salario+acrescimo).toFixed(2)}`)