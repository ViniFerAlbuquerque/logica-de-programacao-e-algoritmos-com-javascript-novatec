// 1. Caching de Elementos do DOM
const inNome = document.getElementById("inNome")
const btGerar = document.getElementById("btGerar")
const btLimpar = document.getElementById("btLimpar")
const outCracha = document.getElementById("outCracha")

const gerarCracha = () => {
    const nomeCompleto = inNome.value.trim()

    if (!nomeCompleto) {
        alert("Por favor, informe o nome completo do participante.")
        inNome.focus();
        return;
    }

    const palavrasDoNome = nomeCompleto.split(' ')

    if (palavrasDoNome.length < 2) {
        alert("Por favor, informe o nome completo (nome e sobrenome) do participante.")
        inNome.focus()
        return
    }

    const primeiroNome = palavrasDoNome[0]
    const ultimoSobrenome = palavrasDoNome[palavrasDoNome.length - 1]

    const nomesDoMeio = palavrasDoNome.slice(1, palavrasDoNome.length - 1)

    let iniciaisDoMeio = ''
    if (nomesDoMeio.length > 0) {
        iniciaisDoMeio = nomesDoMeio
            .map(palavra => `${palavra.charAt(0).toUpperCase()}.`)
            .join(' ')
    }

    let nomeParaCracha;
    if (iniciaisDoMeio) {
        nomeParaCracha = `${primeiroNome} ${iniciaisDoMeio} ${ultimoSobrenome}`
    } else {
        nomeParaCracha = `${primeiroNome} ${ultimoSobrenome}`
    }

    const textoCrachaHTML = `
        Crachá: ${nomeParaCracha}
        <br>
        (${nomeCompleto.length} letras)
    `

    outCracha.innerHTML = textoCrachaHTML
}

const limparCampos = () => {
    inNome.value = ''
    outCracha.innerHTML = ''
    inNome.focus()
}

if (btGerar) {
    btGerar.addEventListener("click", gerarCracha)
} else {
    console.error("Erro: Botão 'Gerar crachá' não encontrado. Verifique o ID 'btGerar' no HTML.")
}

if (btLimpar) {
    btLimpar.addEventListener("click", limparCampos)
} else {
    console.error("Erro: Botão 'Limpar' não encontrado. Verifique o ID 'btLimpar' no HTML.")
}