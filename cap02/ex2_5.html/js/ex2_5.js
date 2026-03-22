const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMed.value
    const preco = Number(frm.inNum.value)

    let promo = Number(Math.floor(preco * 2));

    resp1.textContent = `Promoção do medicamento: 
    ${medicamento}`;
    resp2.textContent = `Leve 2 por R$ ${promo}`;

    e.preventDefault()
})