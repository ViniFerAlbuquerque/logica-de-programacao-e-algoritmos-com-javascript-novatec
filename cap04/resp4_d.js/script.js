function analisar () {

    const segmento1 = Number(document.getElementById('segmento1').value) 
    const segmento2 = Number(document.getElementById('segmento2').value) 
    const segmento3 = Number(document.getElementById('segmento3').value) 

    const res = document.querySelector('article.res')

    if (isNaN(segmento1) || isNaN(segmento2) || isNaN(segmento3) || segmento1 <= 0 || segmento2 <= 0 || segmento3 <= 0 ) {
        alert('[ERRO!] => Insira dados pertinentes!') 
        return
    } if (segmento1 < segmento2 + segmento3 && segmento2 < segmento1 + segmento3 && segmento3 < segmento1 + segmento2) {
        res.innerHTML = '<p>É possível formar um triângulo.<br></p>' 
        let classificacao = '' 

        if (segmento1 == segmento2 && segmento2 == segmento3 && segmento3 == segmento1) {
            // Equiláatero : todos os lados iguais 
            classificacao = "Equilátero!" 
        } else if (segmento1 == segmento2 || segmento1 == segmento3 || segmento2 == segmento3) {
            // Isósceles : dois lados iguais 
            classificacao = 'Isósceles!'
        } else {
            // Escaleno : todos os lados diferentes
            classificacao = 'Escaleno!'
        } res.innerText += `Tipo: ${classificacao}`
    } else {
        res.innerText = `Não é possível formar um triângulo!`
    }
}