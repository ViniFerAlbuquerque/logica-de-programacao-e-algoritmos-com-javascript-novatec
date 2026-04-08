const bairro = prompt("Bairro de Entrega: ")
let taxaEntrega
switch (bairro) {
    case "Centro":
        taxaEntrega = 5.00
        break
    case "Alto da Glória":
    case "Alto da XV":
    case "Batel":
    case "Bigorrilho":
    case "Cristo Rei":
    case "Jardim Botânico":
    case "Mercês":
    case "Rebouças":
    case "São Francisco":
        taxaEntrega = 7.50
        break
    case "Água Verde":
    case "Campina do Siqueira":
    case "Portão":
    case "Vila Izabel":
        taxaEntrega = 10.00
        break
    case "Parolim":
        taxaEntrega = 20.00
        break
    default:
        taxaEntrega = 30.00
}
alert(`Taxa R$: ${taxaEntrega.toFixed(2)}`)