const inputName = document.getElementById('name')
const inputAnswers = document.getElementById('answers')
const btnAdd = document.querySelector('.btnAdd')
const btnListarTodos = document.getElementById('btnListarTodos')
const btnAprovadosSegEtapa = document.getElementById('btnAprovadosSegEtapa')
const preResultado = document.querySelector('pre')

const candidates = []

const addCandidate = () => {
    const name = inputName.value.trim()
    const answers = Number(inputAnswers.value)

    if (name === '') {
        alert('Por favor, insira o nome do candidato.')
        inputName.focus()
        return
    }

    if (isNaN(answers) || answers < 0) {
        alert('Por favor, insira um número de acertos válido (maior ou igual a zero).')
        inputAnswers.focus()
        return
    }

    const newCandidate = { name, answers }
    candidates.push(newCandidate)

    inputName.value = ''
    inputAnswers.value = ''
    inputName.focus()

    displayCandidates('Lista de Todos os Candidatos', candidates)
};

const displayCandidates = (title, listToDisplay) => {
    // Se não houver candidatos na lista, exibe uma mensagem
    if (listToDisplay.length === 0) {
        preResultado.innerHTML = `<h2>${title}</h2>\n<p>Nenhum candidato encontrado nesta lista.</p>`
        return
    }

    let output = `<h2>${title}</h2>\n`
    output += '------------------------------------------\n'
    output += 'Nome do Candidato          Nº Acertos\n'
    output += '------------------------------------------\n'

    listToDisplay.forEach(candidate => {
        output += `${candidate.name.padEnd(25)} ${String(candidate.answers).padEnd(10)}\n`
    });
    output += '------------------------------------------\n'

    preResultado.innerHTML = output
}

const listAllCandidates = () => {
    displayCandidates('Lista de Todos os Candidatos', candidates)
}

const showApprovedCandidates = () => {
    if (candidates.length === 0) {
        alert('Não há candidatos cadastrados para realizar a filtragem.')
        return
    }

    const minScoreStr = prompt('Informe o número mínimo de acertos para aprovação na 2ª Etapa:')

    if (minScoreStr === null || minScoreStr.trim() === '') {
        alert('Operação cancelada ou nota de corte não informada.')
        return
    }

    const minScore = Number(minScoreStr)

    if (isNaN(minScore) || minScore < 0) {
        alert('Por favor, insira um número válido para a nota de corte.')
        return
    }

    const approvedCandidates = candidates.filter(candidate => candidate.answers >= minScore)

    approvedCandidates.sort((a, b) => b.answers - a.answers)

    displayCandidates(`Candidatos Aprovados para a 2ª Etapa (Nota de Corte: ${minScore})`, approvedCandidates)
};

btnAdd.addEventListener('click', addCandidate)
btnListarTodos.addEventListener('click', listAllCandidates)
btnAprovadosSegEtapa.addEventListener('click', showApprovedCandidates)

inputAnswers.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        addCandidate()
    }
})

document.addEventListener('DOMContentLoaded', () => {
    preResultado.innerHTML = '<h2>Resultado dos candidatos...</h2>\n<p>Adicione candidatos ou clique nos botões para ver os resultados.</p>'
})