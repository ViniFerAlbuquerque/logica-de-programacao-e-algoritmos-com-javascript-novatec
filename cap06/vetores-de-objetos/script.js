const carros = []
carros.push({modelo: "Sandero", preco: 46500})
carros.push({modelo: "Palio", preco: 37800})
const modelo = "Fiesta"
const preco = 46800
carros.push({modelo, preco})

for (const carro of carros) { 
    console.log(`${carro.modelo} - R$: ${carro.preco}`)
}