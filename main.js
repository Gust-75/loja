function calcTaxa() {
    var valor = parseFloat(document.getElementById("venda").value)

    if (isNaN(valor)) {
        alert("Digite um número válido!")
        return
    }

    document.getElementById("a1").innerText = (valor / 0.9701).toFixed(2)  
    document.getElementById("b2").innerText = (valor / 0.9591).toFixed(2)  +" ou 2x de "+ ((valor / 0.9591/2).toFixed(2))
    document.getElementById("c3").innerText = (valor / 0.9522).toFixed(2)  +" ou 3x de "+ ((valor / 0.9522/3).toFixed(2))
    document.getElementById("d4").innerText = (valor / 0.9454).toFixed(2)  +" ou 4x de "+ ((valor / 0.9454/4).toFixed(2))
    document.getElementById("e5").innerText = (valor / 0.9386).toFixed(2)  +" ou 5x de "+ ((valor / 0.9386/5).toFixed(2))
    document.getElementById("f6").innerText = (valor / 0.9319).toFixed(2)  +" ou 6x de "+ ((valor / 0.9319/6).toFixed(2))
    document.getElementById("g7").innerText = (valor / 0.9233).toFixed(2)  +" ou 7x de "+ ((valor / 0.9233/7).toFixed(2))
    document.getElementById("h8").innerText = (valor / 0.9167).toFixed(2)  +" ou 8x de "+ ((valor / 0.9167/8).toFixed(2))
    document.getElementById("i9").innerText = (valor / 0.9102).toFixed(2)  +" ou 9x de "+ ((valor / 0.9102/9).toFixed(2))
    document.getElementById("j10").innerText = (valor / 0.9038).toFixed(2)  +" ou 10x de "+ ((valor / 0.9038/10).toFixed(2))
    document.getElementById("k11").innerText = (valor / 0.8974).toFixed(2)  +" ou 11x de "+ ((valor / 0.8974/11).toFixed(2))
    document.getElementById("l12").innerText = (valor / 0.8910).toFixed(2)  +" ou 12x de "+ ((valor / 0.8910/12).toFixed(2))
}