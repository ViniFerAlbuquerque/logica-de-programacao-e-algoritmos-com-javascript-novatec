const frm = document.querySelector("form");
const inputSenha = document.getElementById("inSenha");
const mensagemValidacao = document.getElementById("mensagemValidacao");
const togglePasswordVisibility = document.getElementById("togglePasswordVisibility");
const passwordIcon = togglePasswordVisibility.querySelector("i");

const validarSenha = (senha) => {
    let erros = [];

    if (/\s/.test(senha)) { // \s verifica qualquer caractere de espaço em branco
        erros.push("A senha não pode conter espaços em branco.");
    }

    if (senha.length < 8) {
        erros.push("A senha deve ter no mínimo 8 caracteres.");
    }

    if (!/[A-Z]/.test(senha)) {
        erros.push("A senha deve conter pelo menos uma letra maiúscula.");
    }
   
    if (!/[a-z]/.test(senha)) {
        erros.push("A senha deve conter pelo menos uma letra minúscula.");
    }

    if (!/[0-9]/.test(senha)) {
        erros.push("A senha deve conter pelo menos um número.");
    }

    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(senha)) {
        erros.push("A senha deve conter pelo menos um caractere especial.");
    }

    if (erros.length > 0) {
        return { valido: false, mensagens: erros };
    }

    return { valido: true, mensagens: ["Senha válida!"] };
};

const atualizarMensagemValidacao = () => {
    const senhaDigitada = inputSenha.value;

    // Se o campo estiver vazio, limpa a mensagem
    if (senhaDigitada.length === 0) {
        mensagemValidacao.textContent = "";
        return; // Sai da função
    }

    const resultadoValidacao = validarSenha(senhaDigitada);

    if (resultadoValidacao.valido) {
        mensagemValidacao.textContent = resultadoValidacao.mensagens[0];
        mensagemValidacao.style.color = "var(--secondary-color)"; // Cor verde para sucesso
    } else {
        mensagemValidacao.innerHTML = resultadoValidacao.mensagens.map(msg => `• ${msg}`).join('<br>');
        mensagemValidacao.style.color = "red"; // Cor vermelha para erro
    }
};

togglePasswordVisibility.addEventListener("click", () => {
    if (inputSenha.type === "password") {
            inputSenha.type = "text";
        // togglePasswordVisibility.textContent = "Esconder"; // Altera o texto do botão
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye");
    } else {
        // Se for text, muda para password (esconde a senha)
        inputSenha.type = "password";
        // togglePasswordVisibility.textContent = "Mostrar"; // Altera o texto do botão
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash");
    }
});

// Adiciona um listener para o evento de 'submit' do formulário
frm.addEventListener("submit", (event) => {
    event.preventDefault();

    const senhaDigitada = inputSenha.value;
    const resultadoValidacao = validarSenha(senhaDigitada);

    if (resultadoValidacao.valido) {
        mensagemValidacao.textContent = resultadoValidacao.mensagens[0];
        mensagemValidacao.style.color = "var(--secondary-color)";
    } else {
        mensagemValidacao.innerHTML = resultadoValidacao.mensagens.map(msg => `• ${msg}`).join('<br>');
        mensagemValidacao.style.color = "red";
    }
});

inputSenha.addEventListener("input", atualizarMensagemValidacao);

// Adiciona um listener para o evento de 'submit' do formulário
frm.addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página
    atualizarMensagemValidacao(); // Realiza a validação final e exibe a mensagem
});