const frm = document.querySelector("form");
const inputFuncionario = document.getElementById("inFuncionario");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nomeCompleto = inputFuncionario.value.trim().toLowerCase();

        if (nomeCompleto === "") {
        resp.textContent = "Por favor, digite o nome do funcionário.";
        resp.style.color = "red"; 
        return; 
    }

        const partesDoNome = nomeCompleto.split(" ").filter(parte => parte !== '');

        if (partesDoNome.length === 0) {
        resp.textContent = "Nome inválido. Digite um nome válido.";
        resp.style.color = "red";
        return;
    }

    let iniciais = "";
        for (let i = 0; i < partesDoNome.length - 1; i++) {
         iniciais += partesDoNome[i].charAt(0);
    }

    const ultimoNome = partesDoNome[partesDoNome.length - 1];

    const emailGerado = `${iniciais}${ultimoNome}@empresa.com.br`;

    resp.textContent = `E-mail gerado: ${emailGerado}`;
    resp.style.color = "var(--secondary-color)"; 
});