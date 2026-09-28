const palavra = "saladas"

const copia1_slice = palavra.slice(2)      // Obtém "ladas"
const copia1_substring = palavra.substring(2) // Obtém "ladas"
console.log("copia1_slice:", copia1_slice)
console.log("copia1_substring:", copia1_substring)

const copia2_slice = palavra.slice(2, 2 + 4)      // Obtém "lada" (do índice 2 até o 6, sem incluir o 6)
const copia2_substring = palavra.substring(2, 2 + 4) // Obtém "lada" (do índice 2 até o 6, sem incluir o 6)
console.log("copia2_slice:", copia2_slice)
console.log("copia2_substring:", copia2_substring)

const copia3_slice = palavra.slice(0, palavra.length - 1)      // Obtém "salada"
const copia3_substring = palavra.substring(0, palavra.length - 1) // Obtém "salada"
const copia3_slice_concisa = palavra.slice(0, -1) // Obtém "salada"
console.log("copia3_slice:", copia3_slice)
console.log("copia3_substring:", copia3_substring)
console.log("copia3_slice_concisa:", copia3_slice_concisa)

const copia4_slice = palavra.slice(-2)     // Obtém "as" (pega os últimos 2 caracteres)
const copia4_substring_alternativa = palavra.substring(palavra.length - 2) // Obtém "as"
console.log("copia4_slice:", copia4_slice)
console.log("copia4_substring_alternativa:", copia4_substring_alternativa)

// Usando apenas slice, que costuma ser a preferida pela flexibilidade com negativos
const palavraAtualizada = "saladas";

const copia1_atualizada = palavraAtualizada.slice(2) // obtém "ladas"
const copia2_atualizada = palavraAtualizada.slice(2, 6) // obtém "lada" (2 + 4 = 6)
const copia3_atualizada = palavraAtualizada.slice(0, -1) // obtém "salada" (tudo menos o último)
const copia4_atualizada = palavraAtualizada.slice(-2) // obtém "as" (os dois últimos)

console.log("\n--- Código Atualizado (preferindo slice) ---");
console.log("copia1_atualizada:", copia1_atualizada)
console.log("copia2_atualizada:", copia2_atualizada)
console.log("copia3_atualizada:", copia3_atualizada)
console.log("copia4_atualizada:", copia4_atualizada)