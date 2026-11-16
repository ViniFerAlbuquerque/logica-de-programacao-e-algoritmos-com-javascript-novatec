const express = require('express');
const app = express();


app.use(express.json());

function validarParenteses(formula) {
    let saldo = 0;

    for (let i = 0; i < formula.length; i++) {
        const caractere = formula[i];

        if (caractere === '(') {
            saldo++;
        } else if (caractere === ')') {
            saldo--;
        }

        if (saldo < 0) {
            return {
                valido: false,
                motivo: `Erro no caractere ${i + 1}: Encontrou ')' sem '(' correspondente aberto antes.`
            };
        }
    }

    if (saldo === 0) {
        return { valido: true, motivo: "Parênteses balanceados perfeitamente!" };
    } else {
        return {
            valido: false,
            motivo: `Fórmula incompleta: Faltou fechar ${saldo} parêntese(s).`
        };
    }
}

app.post('/validar-formula', (req, res) => {
        const { formula } = req.body;

    if (!formula || typeof formula !== 'string') {
        return res.status(400).json({
            erro: "Por favor, informe uma 'formula' válida em formato de texto no corpo da requisição."
        });
    }

    const resultado = validarParenteses(formula);

    return res.status(200).json({
        formulaEnviada: formula,
        status: resultado.valido ? "APROVADA" : "REJEITADA",
        detalhes: resultado.motivo
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`);
});