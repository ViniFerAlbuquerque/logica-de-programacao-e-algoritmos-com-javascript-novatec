const numeros = [10, 13, 20, 8, 15]
const pares = numeros.filter(num => num % 2 == 0)
console.log(pares.join(', '))

console.log("************************************************")

const amigos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Cátia", idade:25}]

const amigos2 = amigos.filter(aux => aux.idade >= 21 || aux.nome.includes("B") )

for (const amigo of amigos2) {
    console.log(`${amigo.nome} → idade: ${amigo.idade} anos!`)
}