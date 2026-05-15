// const inputNumero = document.getElementById('number');
// const btnVerificar = document.getElementById('button');
// const resultadoElemento = document.getElementById('resultado');

// const verificarNumeroPerfeito = () => {
//   const num = Number(inputNumero.value);

//   // Limpa resultado anterior
//   resultadoElemento.textContent = '';

//   // Validação inicial
//   if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
//     resultadoElemento.textContent = 'Por favor, informe um número inteiro positivo.';
//     return;
//   }

//   // Encontrar divisores (exceto o próprio número)
//   const divisores = [];
//   for (let i = 1; i <= Math.floor(num / 2); i++) {
//     if (num % i === 0) {
//       divisores.push(i);
//     }
//   }

//   // Soma dos divisores
//   const somaDivisores = divisores.reduce((acc, val) => acc + val, 0);

//   // Verifica se é perfeito
//   const ehPerfeito = somaDivisores === num;

//   // Monta mensagem com divisores e soma
//   const divisoresStr = divisores.join(' + ');

//   // Texto final
//   const mensagem = `
//     Divisores: ${divisoresStr} <br>
//     Soma dos divisores: ${somaDivisores} <br>
//     O número ${num} ${ehPerfeito ? 'é' : 'não é'} perfeito.
//   `;

//   resultadoElemento.innerHTML = mensagem;
// };

// // Evento de clique no botão
// btnVerificar.addEventListener('click', verificarNumeroPerfeito);




const inputNumeros = document.getElementById('number');
const btnVerificar = document.getElementById('button');
const resultadoElemento = document.getElementById('resultado');

const verificarNumeroPerfeito = () => {
  const entrada = inputNumeros.value.trim();

  // Limpa resultado anterior
  resultadoElemento.textContent = '';

  if (!entrada) {
    resultadoElemento.textContent = 'Por favor, insira pelo menos um número.';
    return;
  }

  // Separa os números pela vírgula e remove espaços
  const numerosStr = entrada.split(',').map(s => s.trim());

  // Array para guardar resultados de cada número
  const resultados = [];

  for (const strNum of numerosStr) {
    const num = Number(strNum);

    if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
      resultados.push(`"${strNum}" não é um número inteiro positivo válido.`);
      continue;
    }

    // Encontrar divisores (exceto o próprio número)
    const divisores = [];
    for (let i = 1; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        divisores.push(i);
      }
    }

    const somaDivisores = divisores.reduce((acc, val) => acc + val, 0);
    const ehPerfeito = somaDivisores === num;
    const divisoresStr = divisores.join(' + ');

    const mensagem = `
      Número ${num}:<br>
      Divisores: ${divisoresStr} <br>
      Soma dos divisores: ${somaDivisores} <br>
      Resultado: ${ehPerfeito ? 'É perfeito!' : 'Não é perfeito.'}
    `;

    resultados.push(mensagem);
  }

  // Exibe todos os resultados, separados por uma linha horizontal
  resultadoElemento.innerHTML = resultados.join('<hr>');
};

btnVerificar.addEventListener('click', verificarNumeroPerfeito);