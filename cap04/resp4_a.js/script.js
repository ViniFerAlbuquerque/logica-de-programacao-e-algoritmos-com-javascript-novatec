// Pegando os elementos do DOM
const inputNumero = document.getElementById('numero');
const botaoVerificar = document.querySelector('input[type="submit"]');

// O <h2> está dentro do mesmo <section> do input e botão
const resultado = document.querySelector('section section h2');

botaoVerificar.addEventListener('click', (event) => {
  event.preventDefault(); // evita recarregar a página

  if (inputNumero.value === '') {
    resultado.textContent = 'Por favor, digite um número.';
    return;
  }

  const valor = Number(inputNumero.value);

  // Usando operador ternário para definir a mensagem
  resultado.textContent = valor % 2 === 0
    ? `O número ${valor} é par.`
    : `O número ${valor} é ímpar.`;

  // Opcional: limpar o campo após mostrar o resultado
  inputNumero.value = '';
  inputNumero.focus();
});