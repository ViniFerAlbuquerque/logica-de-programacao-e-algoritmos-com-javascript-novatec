const frm = document.querySelector("form");
const inLetra = document.getElementById("inLetra");
const palavraMascaradaDisplay = document.getElementById("palavraMascaradaDisplay");
const tentativasRestantesDisplay = document.getElementById("tentativasRestantesDisplay");
const letrasTentadasDisplay = document.getElementById("letrasTentadasDisplay");
const mensagemDisplay = document.getElementById("mensagem");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnAdivinhar = document.querySelector("input[type='submit']"); // Referência ao botão "Adivinhar"

const frutas = [
    'ABACATE', 'ABACAXI', 'ACEROLA', 'AMEIXA', 'AMORA', 'AÇAÍ', 'BACABA', 'BACURI', 'BANANA', 'BIRIBÁ', 'BLUEBERRY', 'CACAU',     'CAJÁ', 'CAJU', 'CAQUI', 'CARAMBOLA', 'CEREJA', 'CIDRA', 'CIRIGUELA', 'COCO', 'CUPUAÇU', 'DAMASCO', 'DURIÃO', 'FIGO', 'FRAMBOESA', 'FRUTA-DO-CONDE', 'GRAVIOLA', 'GOIABA', 'GROSELHA', 'JABUTICABA', 'JACA', 'JAMBO', 'JAMELÃO', 'JENIPAPO', 'KIWI',
    'LARANJA', 'LICHIA', 'LIMÃO', 'LONGAN', 'MAÇÃ', 'MAMÃO', 'MANGA', 'MARACUJÁ', 'MELANCIA', 'MELÃO', 'MIRTILO', 'MORANGO', 'NECTARINA', 'NONI', 'PEQUI', 'PÊRA', 'PÊSSEGO', 'PHYSALIS', 'PITANGA', 'PITAYA', 'PUXURI', 'RAMBUTAN', 'ROMÃ', 'SAPOTI', 'SERIGUELA', 'SIRIGUELA', 'TAMARINDO', 'TANGERINA', 'TORANJA', 'UMBU', 'UVA', 'CAJUZINHO', 'CEREJA-DO-MATO', 'GRUMIXAMA', 'JATOBÁ', 'MURICI', 'PINHA'
];
let frutaSecreta = '';
let palavraMascarada = ''; // Ex: B _ N _ N A
let letrasTentadas = [];
let tentativasRestantes = 6; // Número de "vidas" do jogador
let jogoTerminado = false; // Flag para controlar o estado do jogo

const escolherFrutaAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * frutas.length);
    return frutas[indiceAleatorio];
};

const criarPalavraMascaradaInicial = (palavra) => {
    return '_'.repeat(palavra.length);
};

const atualizarDisplay = () => {
    palavraMascaradaDisplay.innerText = palavraMascarada.split('').join(' ');
    tentativasRestantesDisplay.innerText = tentativasRestantes;
    letrasTentadasDisplay.innerText = letrasTentadas.length > 0 ? letrasTentadas.join(', ') : 'Nenhuma';
};

const iniciarJogo = () => {
    frutaSecreta = escolherFrutaAleatoria();
    palavraMascarada = criarPalavraMascaradaInicial(frutaSecreta);
    letrasTentadas = [];
    tentativasRestantes = 6; // Reseta as tentativas
    jogoTerminado = false;

    mensagemDisplay.innerText = '';
    inLetra.value = '';
    inLetra.disabled = false; // Habilita o input
    btnAdivinhar.disabled = false; // Habilita o botão Adivinhar
    btnReiniciar.style.display = 'none'; 
    atualizarDisplay(); 
    inLetra.focus(); 
    console.log("Fruta Secreta (apenas para debug):", frutaSecreta); 
};

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (jogoTerminado) {
        mensagemDisplay.innerText = 'O jogo já terminou. Clique em "Reiniciar Jogo" para jogar novamente.';
        return;
    }

    const letraDigitada = inLetra.value.toUpperCase(); 


    // if (!letraDigitada.match(/[A-Z]/) || letraDigitada.length !== 1) {
    //     mensagemDisplay.innerText = 'Por favor, digite apenas UMA letra do alfabeto.';
    //     inLetra.value = ''; // Limpa o input
    //     inLetra.focus();
    //     return;
    // }

        // Validação da entrada: deve ser uma única letra do alfabeto
    if (!letraDigitada.match(/[A-ZÇÃÕÀÁÉÍÓÚÜ]/) || letraDigitada.length !== 1) { // Adicionado caracteres especiais
        mensagemDisplay.innerText = 'Por favor, digite apenas UMA letra do alfabeto.';
        inLetra.value = '';
        inLetra.focus();
        return;
    }

    if (letrasTentadas.includes(letraDigitada)) {
        mensagemDisplay.innerText = `Você já tentou a letra "${letraDigitada}". Tente outra!`;
        inLetra.value = '';
        inLetra.focus();
        return;
    }

    letrasTentadas.push(letraDigitada);
    mensagemDisplay.innerText = ''; 

    if (frutaSecreta.includes(letraDigitada)) {
          let novaPalavraMascarada = '';
        for (let i = 0; i < frutaSecreta.length; i++) {
            if (frutaSecreta[i] === letraDigitada) {
                novaPalavraMascarada += letraDigitada; // Revela a letra
            } else {
                novaPalavraMascarada += palavraMascarada[i]; // Mantém o que já estava
            }
        }
        palavraMascarada = novaPalavraMascarada;

        if (palavraMascarada === frutaSecreta) {
            mensagemDisplay.innerText = `🎉 Parabéns! Você adivinhou a fruta "${frutaSecreta}"! 🎉`;
            mensagemDisplay.style.color = '#28a745'; // Cor verde para vitória
            jogoTerminado = true;
            inLetra.disabled = true;
            btnAdivinhar.disabled = true;
            btnReiniciar.style.display = 'block'; // Mostra o botão de reiniciar
        }

    } else {
        // Letra incorreta: diminui as tentativas
        tentativasRestantes--;
        mensagemDisplay.innerText = `❌ A letra "${letraDigitada}" NÃO está na fruta. ❌`;
        mensagemDisplay.style.color = '#dc3545'; // Cor vermelha para erro

        // Verifica se o jogador perdeu
        if (tentativasRestantes <= 0) {
            mensagemDisplay.innerText = `😔 Fim de jogo! A fruta secreta era "${frutaSecreta}". 😔`;
            mensagemDisplay.style.color = '#dc3545';
            jogoTerminado = true;
            inLetra.disabled = true;
            btnAdivinhar.disabled = true;
            btnReiniciar.style.display = 'block'; // Mostra o botão de reiniciar
        }
    }

    atualizarDisplay();
    inLetra.value = '';
    inLetra.focus(); 
});

btnReiniciar.addEventListener("click", iniciarJogo);


document.addEventListener("DOMContentLoaded", iniciarJogo);