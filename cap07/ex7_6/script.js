const frm = document.querySelector("form");
const inputSenha = document.getElementById("inSenha"); // Corrigido o ID aqui!
const mensagemValidacao = document.getElementById("mensagemValidacao"); // Seleciona o h3 pelo ID

const validarSenha = (senha) => {
    let erros = [];

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

frm.addEventListener("submit", (event) => {
       event.preventDefault();

    const senhaDigitada = inputSenha.value;

    const resultadoValidacao = validarSenha(senhaDigitada);

    if (resultadoValidacao.valido) {
        mensagemValidacao.textContent = resultadoValidacao.mensagens[0];
        mensagemValidacao.style.color = "var(--secondary-color)"; // Cor verde para sucesso
    } else {
        mensagemValidacao.innerHTML = resultadoValidacao.mensagens.map(msg => `• ${msg}`).join('<br>');
        mensagemValidacao.style.color = "red";
    }
});