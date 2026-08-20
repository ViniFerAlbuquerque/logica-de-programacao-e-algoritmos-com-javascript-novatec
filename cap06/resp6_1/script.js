const clubes = [];


const inputNomeClube = document.getElementById('nomeClube');
const btAdicionar = document.getElementById('btAdicionar');
const btListar = document.getElementById('btListar');
const btTabela = document.getElementById('btTabela');
const listaClubesUl = document.getElementById('listaClubes'); // Onde os clubes serão listados
const tabelaJogosUl = document.getElementById('tabelaJogos'); // Onde os jogos serão exibidos


const capitalizarPrimeirasLetras = (frase) => {

    return frase
        .toLowerCase()
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ');
};

const adicionarClube = () => {
    // Pega o valor do input e remove espaços em branco extras do início/fim com `.trim()`.
    const nomeClube = inputNomeClube.value.trim();

    // Validação: Verifica se o campo de input está vazio.
    if (nomeClube === '') {
        alert('Por favor, digite o nome de um clube antes de adicionar!');
        inputNomeClube.focus(); // Coloca o foco de volta no input para facilitar a digitação.
        return; // Sai da função se a validação falhar.
    }

    // Formata o nome do clube para ter a primeira letra de cada palavra maiúscula.
    const clubeFormatado = capitalizarPrimeirasLetras(nomeClube);

    // Adiciona o clube formatado ao array 'clubes'.
    // `push()` é um método de array que adiciona um elemento ao final.
    clubes.push(clubeFormatado);

    // Limpa o campo de input após adicionar o clube.
    inputNomeClube.value = '';
    inputNomeClube.focus(); // Coloca o foco de volta para adicionar o próximo.

    // Chama a função para atualizar a lista de clubes exibida na tela.
    listarClubes();

    // Limpa a tabela de jogos se um novo clube for adicionado.
    // Isso é importante porque a adição de um clube invalida qualquer tabela de jogos anterior.
    tabelaJogosUl.innerHTML = '<li>Adicione mais clubes ou clique em "Tabela de Jogos" para gerar.</li>';
};

// 4. Função para listar os clubes
// Esta função será executada quando o botão "Listar Clubes:" for clicado ou após adicionar um clube.
const listarClubes = () => {
    // Limpa todo o conteúdo HTML da lista de clubes antes de recriá-la.
    listaClubesUl.innerHTML = '';

    // Verifica se há clubes no array.
    if (clubes.length === 0) {
        listaClubesUl.innerHTML = '<li>Nenhum clube adicionado ainda.</li>';
        return; // Sai da função.
    }

    // Itera sobre o array de clubes e cria um item de lista (<li>) para cada um.
    // `forEach` é um método de array moderno (ES6+) que executa uma função para cada elemento.
    clubes.forEach(clube => {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = clube;                  // Define o texto do <li> como o nome do clube
        listaClubesUl.appendChild(li);           // Adiciona o <li> à lista <ul> no HTML
    });
};

// 5. Função para montar a tabela de jogos
// Esta função será executada quando o botão "Tabela de Jogos:" for clicado.
const montarTabelaDeJogos = () => {
    // Limpa qualquer tabela de jogos existente.
    tabelaJogosUl.innerHTML = '';

    // Validação: Verifica se há clubes suficientes para formar jogos.
    if (clubes.length < 2) {
        tabelaJogosUl.innerHTML = '<li>Adicione pelo menos 2 clubes para montar a tabela de jogos.</li>';
        return;
    }

    // Validação: Verifica se o número de clubes é ímpar.
    // `resto % 2 !== 0` significa que o número é ímpar.
    if (clubes.length % 2 !== 0) {
        // Exibe uma mensagem de erro estilizada.
        tabelaJogosUl.innerHTML = '<li style="color: red; font-weight: bold;">O número de clubes é ímpar. Não é possível montar a tabela de jogos eliminatórios!</li>';
        return; // Sai da função.
    }

    // Lógica para montar os jogos: primeiro x último, segundo x penúltimo, etc.
    const numeroDeJogos = clubes.length / 2;
    const jogos = []; // Array para armazenar os confrontos.

    // Loop que vai da primeira posição até a metade do array.
    // A cada iteração, pegamos um clube do início e um do final.
    for (let i = 0; i < numeroDeJogos; i++) {
        const primeiroClube = clubes[i];
        const ultimoClube = clubes[clubes.length - 1 - i]; // Pega o clube do final, movendo para o início.
        jogos.push(`${primeiroClube} x ${ultimoClube}`); // Usa template literal (ES6+) para formatar a string.
    }

    // Se por algum motivo (embora improvável após as validações) não houver jogos, exibe uma mensagem.
    if (jogos.length === 0) {
        tabelaJogosUl.innerHTML = '<li>Nenhum jogo gerado.</li>';
        return;
    }

    // Itera sobre o array de jogos e os adiciona à lista no HTML.
    jogos.forEach(jogo => {
        const li = document.createElement('li');
        li.textContent = jogo;
        tabelaJogosUl.appendChild(li);
    });
};

// 6. Adicionar os Event Listeners aos botões
// `addEventListener` é a forma padrão e recomendada de anexar eventos no JavaScript.
// Recebe o tipo de evento (ex: 'click') e a função a ser executada.
btAdicionar.addEventListener('click', adicionarClube);
btListar.addEventListener('click', listarClubes);
btTabela.addEventListener('click', montarTabelaDeJogos);

// 7. Inicialização da página ao carregar o DOM
// `DOMContentLoaded` garante que o JS só tente manipular o DOM depois que ele estiver completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    listarClubes(); // Exibe a mensagem "Nenhum clube adicionado" ao carregar a página.
    tabelaJogosUl.innerHTML = '<li>Adicione clubes e clique em "Tabela de Jogos" para gerar.</li>'; // Mensagem inicial para a tabela.
});