// const novaStr = str.replace(caracterePesquisado, novoCaractere)

const senha = "ABACAD"

const senha1 = senha.replace("A", "X")
const senha2 = senha.replace(/A/g, "X") 
console.log('senha1 :', senha1)
console.log('senha2 :', senha2)
