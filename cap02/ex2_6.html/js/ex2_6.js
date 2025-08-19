const inMin = document.getElementById("inMin");
const inCliente = document.getElementById("inCliente");
const btnCalc = document.getElementById("btnCalc");
const vlrCliente = document.getElementById("vlrCliente");

function vClient(e) {
    let precoPorMinuto = Number(inMin.value);
    let tempoDeUso = Number(inCliente.value);
    let tempoTotalDeUso = Math.ceil(tempoDeUso / 15);

    let precoTotal = (precoPorMinuto * tempoTotalDeUso).toFixed(2);

    vlrCliente.innerText = (`Valor total a ser pago pelo cliente R$ ${precoTotal}`);

    e.preventDefault()
}

btnCalc.addEventListener("click", vClient);