function validarParenteses(formula) {
    let saldo = 0;

    for (let i = 0; i < formula.length; i++) {
        const caractere = formula[i];

        if (caractere === '(') {
            saldo++;
        } else if (caractere === ')') {
            saldo--;
        }

        // Regra 1: Não pode fechar sem antes ter aberto
        if (saldo < 0) {
            return {
                valido: false,
                motivo: `Erro na posição ${i + 1}: Encontrou ')' sem um '(' correspondente aberto antes.`
            };
        }
    }

    // Regra 2: Saldo final deve ser zero
    if (saldo === 0) {
        return { valido: true, motivo: "Parênteses balanceados perfeitamente!" };
    } else {
        return {
            valido: false,
            motivo: `Fórmula incompleta: Faltou fechar ${saldo} parêntese(s).`
        };
    }
}

// 1. Capturamos o argumento passado no terminal
const formulaInformada = process.argv[2];

// 2. Validação defensiva: e se o usuário esquecer de digitar a fórmula?
if (!formulaInformada) {
    console.log("⚠️  Atenção: Você precisa passar uma fórmula!");
    console.log("👉 Exemplo de uso: node validador.js \"((2+5)*4)/3\"");
    process.exit(1); // Encerra o programa indicando que houve um erro de uso
}

// 3. Execução da análise
console.log(`\n🔍 Analisando a fórmula: ${formulaInformada}`);
const resultado = validarParenteses(formulaInformada);

if (resultado.valido) {
    console.log(`✅ VÁLIDA: ${resultado.motivo}\n`);
} else {
    console.log(`❌ INVÁLIDA: ${resultado.motivo}\n`);
}