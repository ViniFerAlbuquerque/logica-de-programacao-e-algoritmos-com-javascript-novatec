const numeros = [10, 13, 20, 8, 15]
const dobros = numeros.map(num => num * 2)

console.log(dobros.join(", "))
console.log("===================================")

const amigos = [ {nome: "Ana", idade: 20},
    {nome: "Bruno", idade: 17},
    {nome: "Cátia", idade: 25} ] 

    const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2026 - aux.idade}))

    for (const amigo of amigos2) {
        console.log(`${amigo.nome} → Nasceu em: ${amigo.nasc}`)
    }