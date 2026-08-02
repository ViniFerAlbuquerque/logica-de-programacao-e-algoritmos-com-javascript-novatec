const numeros = [50, 100, 2]
numeros.sort()
console.log(numeros.join(", "))
numeros.sort((a, b) => a - b )
console.log(numeros.join(", "))