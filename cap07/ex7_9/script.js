const prompt = require("prompt-sync")()
const formula = prompt("Fórmula:")

let abre = 0
let fecha = 0

for (const símbolo of formula) {
    if (simbolo == "(") {
        abre++
    } else if (simbolo == ")") {
        fecha++
    }
    //se, em algum momento, o número de fecha for maior que abre...
    if (fecha > abre) {
        break //...sai da repetição
    }
}

if (abre == fecha) {
    console.log("OK! Fórmula correta (em relação aos parênteses)")
} else {
    console.log("ERRO... Fórmula incorreta")
}