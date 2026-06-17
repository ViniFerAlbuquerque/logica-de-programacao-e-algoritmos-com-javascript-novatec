// Obtendo os elementos de um array:
const pacientes = ["Ana", "Carlos", "Sofia"]
const [a, b, c] = pacientes
console.log(a)
console.log(b)
console.log(c)
console.log(`A → ${a}, B → ${b}, C → ${c} 
--------------------------------`)
//Utilizando o operador Rest(...) que cria um novo vetor com os elementos restantes.
const enfermos = ["Ana", "Carlos", "João", "Sofia"]
const [atender, proximo, ...outros] = enfermos
console.log(atender)
console.log(proximo)
console.log(outros)
console.log(`Atender → ${atender};
    Próximo → ${proximo}; 
    Outros → ${outros} 
--------------------------------`)
