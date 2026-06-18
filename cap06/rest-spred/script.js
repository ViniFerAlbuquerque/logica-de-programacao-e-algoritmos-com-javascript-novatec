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
 No aguardo: → ${outros} 
----------------------------------------------`)
const carro = { modelo: "Corsa", preco: 59500 }
const carro2 = { ...carro, ano: 2020 } 
console.log(carro2)
console.log(`-----------------------------------------------`)
let patients = ["João", "Sofia"]
patients = ["Ana", ...patients]
patients = [...patients, "Maria"]
console.log(patients)