// const novaStr = str.replace(caracterePesquisado, novoCaractere)

const senha = "ABACAD"

const senha1 = senha.replace("A", "X")
const senha2 = senha.replace(/A/g, "X") 
console.log('senha1 :', senha1)
console.log('senha2 :', senha2)

const app = "App Controle Financeiro"
const app2 = app.replace(" ", "")
const app3 = app.replace(/ /g, "")
const app4 = app.replace(/ /g, "").toLowerCase()

console.log('Controle financeiro :', app2)
console.log('Controle Financeiro :', app3)
console.log('Controle Financeiro :', app4)