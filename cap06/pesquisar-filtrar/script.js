const idades = [12, 20, 15, 17, 14, 51]
for (const idade of idades) {
    if (idade >= 18) {
        console.log(idade)
    }
}

console.log("========================================================================")

const idades01 = [12, 16, 15, 17, 14]
let maiores = false
for (const idade01 of idades01) {
    if (idade01 >= 18) {
        console.log(idade01) 
        maiores = true
    }
}
if (!maiores) {
    console.log("[ATENÇÂO!] → Não há idades maiores que 18 na lista!")
}