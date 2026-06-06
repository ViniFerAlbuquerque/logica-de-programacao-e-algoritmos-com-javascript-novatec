const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")
const respVitorias = document.querySelector("#outVitorias")
const respDerrotas = document.querySelector("#outDerrotas")

let erros = []
let sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

// Recuperar vitórias e derrotas do localStorage (ou inicializar com 0)
let vitorias = Number(localStorage.getItem("vitorias")) || 0
let derrotas = Number(localStorage.getItem("derrotas")) || 0

// let vitorias = 0
// let derrotas = 0

respVitorias.innerText = vitorias
respDerrotas.innerText = derrotas

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if (numero == sorteado) {
        vitorias++
        localStorage.setItem("vitorias", vitorias)
        respVitorias.innerText = vitorias
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)) {
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero)
            const numErros = erros.length
            const numChances = CHANCES - numErros
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0) {
                derrotas++
                localStorage.setItem("derrotas", derrotas)
                respDerrotas.innerText = derrotas
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
            } else {
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

// frm.btNovo.addEventListener("click", () => {
//     location.reload()
// })

frm.btNovo.addEventListener("click", () => {
    erros.length = 0
    sorteado = Math.floor(Math.random() * 100) + 1
    respErros.innerText = "0"
    respChances.innerText = CHANCES
    respDica.innerText = "Dica: É um número entre 1 e 100"
    frm.btSubmit.disabled = false
    frm.btNovo.className = "oculta"
    frm.inNumero.value = ""
    frm.inNumero.focus()
})
