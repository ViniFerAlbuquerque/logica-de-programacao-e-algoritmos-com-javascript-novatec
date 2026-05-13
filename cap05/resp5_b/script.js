// const inputChinchilas = document.getElementById('quant');
// const inputAnos = document.getElementById('totalAnos');
// const btnPrevisao = document.getElementById('previsao');
// const resultadoElemento = document.getElementById('resultado');

// const calcularPrevisao = () => {
//   const numInicial = Number(inputChinchilas.value);
//   const anos = Number(inputAnos.value);

//   // Limpa resultado anterior
//   resultadoElemento.textContent = '';

//   // Validações
//   if (isNaN(numInicial) || numInicial < 2) {
//     resultadoElemento.textContent = 'Informe um número inicial de chinchilas maior ou igual a 2 (um casal).';
//     return;
//   }

//   if (isNaN(anos) || anos < 1) {
//     resultadoElemento.textContent = 'Informe um número válido de anos (1 ou mais).';
//     return;
//   }

//   // Variável para armazenar os resultados ano a ano em texto
//   let textoResultado = '';

//   // Ano 1: número inicial
//   textoResultado += `Ano 1: ${numInicial} chinchilas\n`;

//   // A partir do ano 2, a população triplica a cada ano
//   let populacao = numInicial;
//   for (let ano = 2; ano <= anos; ano++) {
//     populacao *= 3;
//     textoResultado += `Ano ${ano}: ${populacao} chinchilas\n`;
//   }

//   // Exibe o resultado no <h3> (para pular linha no HTML, usamos <br>)
//   resultadoElemento.innerHTML = textoResultado.replace(/\n/g, '<br>');
// };

// // Adiciona evento para o botão
// btnPrevisao.addEventListener('click', calcularPrevisao);

// Captura os elementos do DOM
const inputChinchilas = document.getElementById('quant');
const inputAnos = document.getElementById('totalAnos');
const btnPrevisao = document.getElementById('previsao');
const resultadoElemento = document.getElementById('resultado');

// Função que formata o número ordinal masculino em português
const ordinal = (n) => {
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return n; // retorna o valor original se inválido
    }
    return `${n}º`;
};

// Função que calcula e mostra a previsão de chinchilas
const calcularPrevisao = () => {
    const numInicial = Number(inputChinchilas.value);
    const anos = Number(inputAnos.value);

    // Limpa resultado anterior
    resultadoElemento.textContent = '';

    // Validações
    if (isNaN(numInicial) || numInicial < 2) {
        resultadoElemento.textContent = 'Informe um número inicial de chinchilas maior ou igual a 2 (um casal).';
        return;
    }

    if (isNaN(anos) || anos < 1) {
        resultadoElemento.textContent = 'Informe um número válido de anos (1 ou mais).';
        return;
    }

    // Variável para armazenar o texto com a previsão ano a ano
    let textoResultado = '';
    textoResultado += `${ordinal(1)} Ano: ${numInicial} chinchilas\n`;

    let populacao = numInicial;
    for (let ano = 2; ano <= anos; ano++) {
        populacao *= 3;
        textoResultado += `${ordinal(ano)} Ano: ${populacao} chinchilas\n`;
    }

    // Exibe o resultado no <h3>, respeitando as quebras de linha
    resultadoElemento.innerHTML = textoResultado.replace(/\n/g, '<br>');
};

// Adiciona evento de clique ao botão
btnPrevisao.addEventListener('click', calcularPrevisao);