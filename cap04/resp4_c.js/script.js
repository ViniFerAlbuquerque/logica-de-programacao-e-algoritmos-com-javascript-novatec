document.addEventListener('DOMContentLoaded', () => {
  const inputValue = document.getElementById('value');
  const btnConfirm = document.getElementById('confirmDeposit');
  const displayTime = document.getElementById('time');
  const displayChange = document.getElementById('change');

  // Tarifas do parquímetro: preço e tempo correspondente
  const rates = [
    { price: 3.00, time: 120 },
    { price: 1.75, time: 60 },
    { price: 1.00, time: 30 }
  ];

  btnConfirm.addEventListener('click', () => {
    const deposited = parseFloat(inputValue.value);

    // Validação do valor inserido
    if (isNaN(deposited) || deposited < 0.10) {
      displayTime.textContent = '';
      displayChange.textContent = 'Por favor, insira um valor válido.';
      return;
    }

    // Verifica se valor é suficiente para o tempo mínimo (R$ 1,00)
    if (deposited < 1.00) {
      displayTime.textContent = 'Valor Insuficiente';
      displayChange.textContent = '';
      return;
    }

    // Inicializa cálculo de tempo e custo usado
    let totalTime = 0;
    let totalCost = 0;
    let remaining = deposited;

    // Para maximizar o tempo, tenta usar as maiores tarifas primeiro
    for (const rate of rates) {
      if (remaining >= rate.price) {
        const count = Math.floor(remaining / rate.price);
        totalTime += count * rate.time;
        const cost = count * rate.price;
        totalCost += cost;
        remaining -= cost;
      }
    }

    // Calcula troco (se houver)
    const change = (deposited - totalCost).toFixed(2);

    // Exibe resultados
    displayTime.textContent = `Tempo de permanência: ${totalTime} minutos`;
    displayChange.textContent = change > 0 ? `Troco: R$ ${change}` : 'Sem troco';
  });
});