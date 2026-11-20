// const prompt = require("prompt-sync")()
// const altura = Number(prompt("Altura da Árvore: "))
// console.log()
// for (let i=1; i<altura; i++){
//     const espacos = 30 + (altura - i)
//     console.log(" ".repeat(espacos) + "*".repeat(i*2))
// }


const prompt = require("prompt-sync")();

const altura = Number(prompt("Altura da Árvore: "));
console.log();

// 1. Desenhando a copa da árvore
for (let i = 1; i <= altura; i++) {
    const espacos = 30 + (altura - i);
    // Usamos (i * 2 - 1) se quiser ponta fina (1 estrela no topo), 
    // ou mantemos i * 2 conforme original:
    console.log(" ".repeat(espacos) + "*".repeat(i * 2));
}

// 2. Calculando o tronco
const alturaTronco = Math.max(1, Math.floor(altura / 2)); // Garante pelo menos 1 linha
const espacosTronco = 30 + (altura - 1); // Alinha o tronco de 2 estrelas exatamente no centro da copa

// 3. Desenhando o tronco
for (let j = 0; j < alturaTronco; j++) {
    console.log(" ".repeat(espacosTronco) + "**");
}

console.log();