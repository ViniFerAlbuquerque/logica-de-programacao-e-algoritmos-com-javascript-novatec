const frm = document.querySelector("form");
const inputFuncionario = document.getElementById("inFuncionario");
const resp = document.querySelector("h3");

const preposicoes = ["da", "de", "do", "dos", "das", "e", "com"];

frm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nomeCompleto = inputFuncionario.value.trim().toLowerCase();

        if (nomeCompleto === "") {
        resp.textContent = "Por favor, digite o nome do funcionário.";
        resp.style.color = "red"; 
        return; 
    }

        const partesDoNome = nomeCompleto.split(" ").filter(parte => parte !== '');
         const partesRelevantes = partesDoNome.filter(parte => !preposicoes.includes(parte));

           if (partesRelevantes.length === 0) {
        resp.textContent = "Nome inválido. Não foi possível gerar um e-mail (talvez contenha apenas preposições ou espaços).";
        resp.style.color = "red";
        return;
    }

    let iniciais = "";
    if (partesRelevantes.length > 1) {
        for (let i = 0; i < partesRelevantes.length - 1; i++) {
            iniciais += partesRelevantes[i].charAt(0);
        }
    }

    const ultimoNome = partesDoNome[partesDoNome.length - 1];

    const emailGerado = `${iniciais}${ultimoNome}@empresa.com.br`;

    resp.textContent = `E-mail: ${emailGerado}`;
    resp.style.color = "var(--secondary-color)"; 
});