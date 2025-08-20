const  inProduto = document.getElementById("inProduto")
const inPreco = document.getElementById("inPreco")
const inSubmit = document.getElementById("inSubmit")
const hPromo = document.getElementById("hPromo")
const hProd = document.getElementById("hProd")

function calcPromo (e) {
   let nomeProduto = inProduto.value
   let precoProduto = inPreco.value

   let precoPromocao = ((precoProduto * 2) + (precoProduto * 0.5)).toFixed(2)
   let precoProduto3 = (precoProduto * 0.5).toFixed(2)
   
    hPromo.textContent = `${nomeProduto} - Promoção: Leve 3 por: R$ ${precoPromocao}`
    hProd.textContent = `O 3º produto custa apenas ${precoProduto3}`

    e.preventDefault()
}
inSubmit.addEventListener("click", calcPromo)