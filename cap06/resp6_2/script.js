const numeros = []

const inputNumero = document.getElementById('inputNumero')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnVerificarOrdem = document.getElementById('btnVerificarOrdem')
const btnLimparLista = document.getElementById('btnLimparLista');
const listaNumerosDisplay = document.getElementById('listaNumeros')
const statusOrdemDisplay = document.getElementById('statusOrdem')

const exibirNumeros = () => {
    if(numeros.length === 0){
    listaNumerosDisplay.textContent = '[ATENÇÃO] → Nenhum número adicionado ainda!'
}else{
    listaNumerosDisplay.textContent = `Números: [${numeros.join(', ')}]`
}
}

const verificarOrdemCrescente = () => {
    if(numeros.length <= 1){
        return true 
    }
    for(let i = 1; i < numeros.length; i++){
    if(numeros[i] < numeros[i - 1]){
        return false 
    }
 }
    return true 
}

btnAdicionar.addEventListener('click', () => {
    const numeroDigitado = Number(inputNumero.value)
    if(isNaN(numeroDigitado) || inputNumero.value.trim() === ''){
        alert(`[ATENÇÂO] → Por favor, digite um número válido!`)
        inputNumero.focus()
        return
    }
    if(numeros.includes(numeroDigitado)){
        alert(`O número ${numeroDigitado} já foi adicionado!`)
        inputNumero.value = ''
        inputNumero.focus()
        return
    }
    numeros.push(numeroDigitado)
    console.log('Números atuais:', numeros)
    exibirNumeros()
    inputNumero.value = ''
    inputNumero.focus()
    statusOrdemDisplay.textContent =''
    statusOrdemDisplay.style.color =''
})

btnVerificarOrdem.addEventListener('click', () => {
    if(numeros.length === 0){
        statusOrdemDisplay.textContent = 'Adicione número para verificar a ordem!'
        statusOrdemDisplay.style.color ="orange"
        return 
    }
    const estaEmOrdem = verificarOrdemCrescente()
    if(estaEmOrdem){
        statusOrdemDisplay.textContent ='✅Números estão em ordem crescente!'
        statusOrdemDisplay.style.color ='green'
    }else{
        const numerosOrdenados = [...numeros].sort((a, b) => a - b)
        statusOrdemDisplay.textContent ='❌Números NÃO estão em ordem crescente!'
        statusOrdemDisplay.style.color = 'red'
    }
})

btnLimparLista.addEventListener('click', () => {
    numeros.length = 0
    exibirNumeros()
    statusOrdemDisplay.textContent = ''
    statusOrdemDisplay.style.color = ''
    inputNumero.focus()
    })

   exibirNumeros()


