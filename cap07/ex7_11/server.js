const prompt = require("prompt-sync")()
const parcelas = Number(prompt("Quantas parcelas? "))
const data = new Date()

for (let i = 1; i <= parcelas; i++) {
    data.setMonth(data.getMonth() + 1) //aumenta um mês na data
    const dia = data.getDate()
    const mes = data.getMonth() + 1 // mês varia de 0 a 11, por isso, +1
    const ano = data.getFullYear()
    const diaZero = dia < 10 ? "0" + mes : mes //acrescenta 0 se dia menor que 10
    const mesZero = mes < 10 ? "0" + mes : mes //acrescenta 0 se mês menor que 10
    console.log(`${i}ª Parcela: ${diaZero}/${mesZero}/${ano}`)
}