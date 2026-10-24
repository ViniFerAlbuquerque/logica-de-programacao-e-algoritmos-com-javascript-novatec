
const form = document.querySelector('.account-form');
const inputDataVencimento = document.getElementById('inDataVEnc');
const inputValor = document.getElementById('inValor');
const outputMulta = document.getElementById('outMulta');
const outputJuros = document.getElementById('outJuros');
const outputTotal = document.getElementById('outTotal');
const btnCalcular = form.querySelector('button[type="submit"]'); // Seleciona o botão de submit dentro do form
const btnNovaConta = form.querySelector('button[type="reset"]'); // Seleciona o botão de reset dentro do form

const MULTA_FIXA_PERCENTUAL = 0.02; 
const JUROS_DIARIO_PERCENTUAL = 0.00033; // Aproximadamente 1% ao mês (0.01 / 30 dias)

/**
 * Formata um número para o formato de moeda brasileira.
 * @param {number} valor - O valor numérico a ser formatado.
 * @returns {string} O valor formatado como moeda.
 */
const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

/**
 * Calcula a diferença em dias entre duas datas.
 * @param {Date} dataInicial - A data inicial.
 * @param {Date} dataFinal - A data final.
 * @returns {number} O número de dias de diferença. Retorna 0 se a data final for anterior ou igual à inicial.
 */
const calcularDiasAtraso = (dataInicial, dataFinal) => {
    // Ajusta as datas para o fuso horário local e remove a hora para evitar problemas de fuso
    const data1 = new Date(dataInicial.getFullYear(), dataInicial.getMonth(), dataInicial.getDate());
    const data2 = new Date(dataFinal.getFullYear(), dataFinal.getMonth(), dataFinal.getDate());

    const umDiaEmMs = 1000 * 60 * 60 * 24; // Milissegundos em um dia
    const diferencaEmMs = data2.getTime() - data1.getTime();
    const dias = Math.ceil(diferencaEmMs / umDiaEmMs); // Arredonda para cima para contar o dia atual

    return Math.max(0, dias); // Garante que não haja dias negativos
};

/**
 * Calcula a multa, juros e o total a pagar de uma conta atrasada.
 * @param {Date} dataVencimento - A data de vencimento da conta.
 * @param {number} valorOriginal - O valor original da conta.
 * @returns {{multa: number, juros: number, total: number}} Um objeto com os valores calculados.
 */
const calcularValoresAtraso = (dataVencimento, valorOriginal) => {
    const dataAtual = new Date(); // Data de hoje (referência para o cálculo)
    const diasAtraso = calcularDiasAtraso(dataVencimento, dataAtual);

    let multa = 0;
    let juros = 0;
    let total = valorOriginal;

    if (diasAtraso > 0) {
        multa = valorOriginal * MULTA_FIXA_PERCENTUAL;
        juros = valorOriginal * JUROS_DIARIO_PERCENTUAL * diasAtraso;
        total = valorOriginal + multa + juros;
    }

    return { multa, juros, total };
};

/**
 * Exibe os resultados do cálculo nos campos de saída.
 * @param {number} multa - Valor da multa.
 * @param {number} juros - Valor dos juros.
 * @param {number} total - Valor total a pagar.
 */
const exibirResultados = (multa, juros, total) => {
    outputMulta.value = multa.toFixed(2); // Usar toFixed para garantir 2 casas decimais
    outputJuros.value = juros.toFixed(2);
    outputTotal.value = total.toFixed(2);
};

/**
 * Limpa todos os campos do formulário e de resultados.
 */
const limparFormulario = () => {
    form.reset(); // Método nativo do formulário para resetar todos os inputs
    // Opcional: garantir que os placeholders apareçam corretamente se os inputs forem tipo number
    outputMulta.value = '';
    outputJuros.value = '';
    outputTotal.value = '';
    inputDataVencimento.focus(); // Foca no primeiro campo para facilitar a nova entrada
};

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    const dataVencimentoStr = inputDataVencimento.value;
    const valorOriginalStr = inputValor.value;

    if (!dataVencimentoStr || !valorOriginalStr) {
        alert('Por favor, preencha a data de vencimento e o valor da conta.');
        return;
    }

    const dataVencimento = new Date(dataVencimentoStr + 'T00:00:00'); // Adiciona T00:00:00 para evitar problemas de fuso horário
    const valorOriginal = parseFloat(valorOriginalStr);

    if (isNaN(valorOriginal) || valorOriginal < 0) {
        alert('Por favor, insira um valor válido para a conta.');
        return;
    }

    // Chama a lógica de cálculo
    const { multa, juros, total } = calcularValoresAtraso(dataVencimento, valorOriginal);

    // Exibe os resultados formatados
    exibirResultados(multa, juros, total);
});

// Evento de click no botão "Nova Conta" para limpar
// O botão de reset já tem o comportamento padrão de limpar, mas podemos adicionar lógica extra se necessário.
btnNovaConta.addEventListener('click', () => {
    limparFormulario();
});

// Inicializa o foco no campo de data de vencimento ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    inputDataVencimento.focus();
});
