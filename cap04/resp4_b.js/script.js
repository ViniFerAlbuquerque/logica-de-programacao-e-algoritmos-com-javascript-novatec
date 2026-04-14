// // Capturando elementos do DOM
// const inputVelPermitida = document.getElementById('velPermitida');
// const inputVelCondutor = document.getElementById('velCondutor');
// const btnVerificar = document.getElementById('btnVerificar');
// const resultado = document.getElementById('resultado');

// // Função para verificar velocidade
// const verificarVelocidade = () => {
//     // Convertendo valores para números
//     const velPermitida = Number(inputVelPermitida.value);
//     const velCondutor = Number(inputVelCondutor.value);

//     // Validação simples
//     if (!velPermitida || !velCondutor || velPermitida <= 0 || velCondutor < 0) {
//         resultado.textContent = 'Por favor, insira valores válidos para ambas as velocidades.';
//         resultado.style.color = 'black';
//         return;
//     }

//     // Calculando 20% a mais da velocidade permitida
//     const limiteLeve = velPermitida * 1.2;

//     if (velCondutor <= velPermitida) {
//         resultado.textContent = 'Velocidade dentro do limite permitido.';
//         resultado.style.color = ' #36e75d';
//     } else if (velCondutor <= limiteLeve) {
//         resultado.textContent = 'Multa Leve';
//         resultado.style.color = 'orange';
//     } else {
//         resultado.textContent = 'Multa Grave';
//         resultado.style.color = 'red';
//     }
// };

// // Adiciona evento de clique ao botão
// btnVerificar.addEventListener('click', verificarVelocidade);

    // Captura elementos
    const inputVelPermitida = document.getElementById('velPermitida');
    const inputVelCondutor = document.getElementById('velCondutor');
    const resultado = document.getElementById('resultado');

    // Função que verifica a velocidade e atualiza resultado
    const verificarVelocidadeTempoReal = () => {
      const velPermitida = Number(inputVelPermitida.value);
      const velCondutor = Number(inputVelCondutor.value);

      if (!velPermitida || velPermitida <= 0) {
        resultado.textContent = 'Por favor, insira a velocidade permitida (maior que 0).';
        resultado.style.color = 'black';
        return;
      }

      if (inputVelCondutor.value === '') {
        resultado.textContent = '';
        return;
      }

      const limiteLeve = velPermitida * 1.2;

      if (velCondutor <= velPermitida) {
        resultado.textContent = 'Velocidade dentro do limite permitido.';
        resultado.style.color = '#36e75d';
      } else if (velCondutor <= limiteLeve) {
        resultado.textContent = 'Multa Leve';
        resultado.style.color = 'orange';
      } else {
        resultado.textContent = 'Multa Grave';
        resultado.style.color = 'red';
      }
    };

    // Eventos para disparar a verificação ao digitar
    inputVelCondutor.addEventListener('input', verificarVelocidadeTempoReal);
    inputVelPermitida.addEventListener('input', verificarVelocidadeTempoReal);