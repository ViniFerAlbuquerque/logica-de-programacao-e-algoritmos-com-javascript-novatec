const frm = document.querySelector("form");
const inputSenha = document.getElementById("inSenha");
const mensagemValidacao = document.getElementById("mensagemValidacao");
const togglePasswordVisibility = document.getElementById("togglePasswordVisibility");
const passwordIcon = togglePasswordVisibility.querySelector("i");
const passwordStrengthBar = document.getElementById("passwordStrengthBar");

// Função para validar a senha
// Retorna um objeto com validade, mensagens e contagem de critérios atendidos
const validarSenha = (senha) => {
    let erros = [];
    let criteriosAtendidos = 0;
    const totalCriterios = 6; // Total de critérios que estamos verificando

    // 1. A senha não pode conter espaços em branco.
    if (/\s/.test(senha)) {
        erros.push("A senha não pode conter espaços em branco.");
    } else {
        criteriosAtendidos++;
    }

    // 2. Mínimo de 8 caracteres
    if (senha.length < 8) {
        erros.push("A senha deve ter no mínimo 8 caracteres.");
    } else {
        criteriosAtendidos++;
    }

    // 3. Conter letra maiúscula
    if (!/[A-Z]/.test(senha)) {
        erros.push("A senha deve conter pelo menos uma letra maiúscula.");
    } else {
        criteriosAtendidos++;
    }

    // 4. Conter letra minúscula
    if (!/[a-z]/.test(senha)) {
        erros.push("A senha deve conter pelo menos uma letra minúscula.");
    } else {
        criteriosAtendidos++;
    }

    // 5. Conter número
    if (!/[0-9]/.test(senha)) {
        erros.push("A senha deve conter pelo menos um número.");
    } else {
        criteriosAtendidos++;
    }

    // 6. Conter caractere especial
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(senha)) {
        erros.push("A senha deve conter pelo menos um caractere especial.");
    } else {
        criteriosAtendidos++;
    }

    return {
        valido: erros.length === 0,
        mensagens: erros.length > 0 ? erros : ["Senha válida!"],
        criteriosAtendidos: criteriosAtendidos,
        totalCriterios: totalCriterios
    };
};

// Função para atualizar a mensagem de validação E a barra de força na tela
const atualizarMensagemValidacao = () => {
    const senhaDigitada = inputSenha.value;

    // Se o campo estiver vazio, limpa a mensagem e reseta a barra
    if (senhaDigitada.length === 0) {
        mensagemValidacao.textContent = "";
        passwordStrengthBar.style.width = "0%";
        passwordStrengthBar.style.backgroundColor = "transparent";
        return;
    }

    const resultadoValidacao = validarSenha(senhaDigitada);

    // Lógica para atualizar a mensagem de validação
    if (resultadoValidacao.valido) {
        mensagemValidacao.textContent = resultadoValidacao.mensagens[0];
        mensagemValidacao.style.color = "var(--secondary-color)"; // Cor verde para sucesso
    } else {
        mensagemValidacao.innerHTML = resultadoValidacao.mensagens.map(msg => `• ${msg}`).join('<br>');
        mensagemValidacao.style.color = "red"; // Cor vermelha para erro
    }

    // Lógica para atualizar a barra de força da senha
    const { criteriosAtendidos } = resultadoValidacao;
    let larguraBarra = 0;
    let corBarra = "transparent";

    // Mapeamento da força conforme o desafio
    if (criteriosAtendidos === 6) { // Todos os 6 critérios atendidos
        larguraBarra = 100;
        corBarra = "var(--strength-strong)"; // Verde
    } else if (criteriosAtendidos >= 4) { // 4 ou 5 critérios
        larguraBarra = 75; // Um pouco menos que 100 para distinguir do "perfeito"
        corBarra = "var(--strength-medium)"; // Laranja
    } else if (criteriosAtendidos >= 2) { // 2 ou 3 critérios
        larguraBarra = 50;
        corBarra = "var(--strength-weak)"; // Vermelho (pode ser laranja mais fraco)
    } else if (criteriosAtendidos >= 1) { // 1 critério
        larguraBarra = 25;
        corBarra = "var(--strength-weak)"; // Vermelho
    } else { // 0 critérios
        larguraBarra = 0;
        corBarra = "transparent";
    }

    passwordStrengthBar.style.width = `${larguraBarra}%`;
    passwordStrengthBar.style.backgroundColor = corBarra;
};

// Adiciona um listener para o evento de 'click' no botão de toggle (Mostrar/Esconder Senha)
togglePasswordVisibility.addEventListener("click", () => {
    if (inputSenha.type === "password") {
        inputSenha.type = "text";
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye");
    } else {
        inputSenha.type = "password";
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash");
    }
});

// Adiciona um listener para o evento 'input' no campo da senha (validação em tempo real)
inputSenha.addEventListener("input", atualizarMensagemValidacao);

// Adiciona um listener para o evento de 'submit' do formulário
frm.addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página
    atualizarMensagemValidacao(); // Realiza a validação final e exibe a mensagem
});