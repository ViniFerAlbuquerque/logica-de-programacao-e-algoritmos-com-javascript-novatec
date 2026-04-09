const prompt = require("prompt-sync")()

const pessoas = Number(prompt("Quantidade de pessoas: "))
const peixes = Number(prompt("Quantidade de peixes: "))

let pagar
if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`)

