const palavra = "#SenhA_123!"
const vetor1 = palavra.match(/[a-z]/g)
const vetor2 = palavra.match(/[A-Z]/g)
const vetor3 = palavra.match(/[0-9]/g)
const vetor4 = palavra.match(/\W|_/g)
const vetor5 = palavra.match(/[T-Z]/g)

console.log('vetor1 :', vetor1)
console.log('vetor2 :', vetor2)
console.log('vetor3 :', vetor3)
console.log('vetor4 :', vetor4)
console.log('vetor5 :', vetor5)