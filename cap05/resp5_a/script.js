const inputFruta = document.querySelector('input[type="text"]');
const inputNumero = document.getElementById('number');
const btnRepetir = document.querySelector('button');
const resultadoElemento = document.getElementById('resultado');

const repetirFruta = () => {
  const fruta = inputFruta.value.trim();
  const numero = Number(inputNumero.value);

  if (!fruta) {
    resultadoElemento.textContent = 'Por favor, digite o nome da fruta.';
    return;
  }
  if (isNaN(numero) || numero <= 0) {
    resultadoElemento.textContent = 'Por favor, informe um número válido maior que zero.';
    return;
  }

  const resultado = Array(numero).fill(fruta).join(' * ');

  // Exibe o resultado dentro do <h3>
  resultadoElemento.textContent = resultado;
};

// Evento de clique no botão
btnRepetir.addEventListener('click', repetirFruta);