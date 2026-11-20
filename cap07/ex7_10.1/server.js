// 1. Módulos necessários
const fs = require('fs'); // Módulo nativo do Node.js para lidar com arquivos (não precisa instalar via npm)
const prompt = require('prompt-sync')(); // Pacote externo para ler dados do terminal

// 2. Entrada do usuário
const altura = Number(prompt("Altura da Árvore: "));

// Variável que vai acumular todo o desenho da árvore
let textoDaArvore = "\n";

// 3. Montando a copa da árvore
for (let i = 1; i <= altura; i++) {
    const espacos = 30 + (altura - i);
    const linha = " ".repeat(espacos) + "*".repeat(i * 2);
    
    // Adicionamos a linha à variável com uma quebra de linha (\n)
    textoDaArvore += linha + "\n";
}

// 4. Calculando as dimensões do tronco
const alturaTronco = Math.max(1, Math.floor(altura / 2));
const espacosTronco = 30 + (altura - 1);

// 5. Montando o tronco
for (let j = 0; j < alturaTronco; j++) {
    const linhaTronco = " ".repeat(espacosTronco) + "***";
    textoDaArvore += linhaTronco + "\n";
}

// 6. Salvando no arquivo com fs.writeFileSync
// Este método cria o arquivo se ele não existir, ou substitui o conteúdo se já existir.
try {
    fs.writeFileSync('arvore.txt', textoDaArvore, 'utf-8');
    
    // Exibimos no terminal também para você ver o resultado imediatamente
    console.log(textoDaArvore);
    console.log(" Sucesso! O arquivo 'arvore.txt' foi criado na mesma pasta do script.");
} catch (erro) {
    console.error(" Ocorreu um erro ao tentar salvar o arquivo:", erro.message);
}   