let alturaAgua = 0;
let alturaComida = 0;
const alturaMaxima = 300;
const quantidadePorAcao = 30;

function atualizarLabel(elementId, altura) {
    const label = document.querySelector(`.${elementId === 'water' ? 'label' : 'label1'}`);
    label.innerText = `${(altura / alturaMaxima * 1000).toFixed(0)}ml`;
}

function ajustarNivel(elementId, aumento) {
    let alturaAtual = elementId === 'water' ? alturaAgua : alturaComida;
    
    if ((aumento && alturaAtual < alturaMaxima) || (!aumento && alturaAtual > 0)) {
        alturaAtual += aumento ? quantidadePorAcao : -quantidadePorAcao;
        alturaAtual = Math.max(alturaAtual, 0);
        
        if (elementId === 'water') {
            alturaAgua = alturaAtual;
        } else {
            alturaComida = alturaAtual;
        }
        
        document.getElementById(elementId).style.height = alturaAtual + 'px';
        atualizarLabel(elementId, alturaAtual);
    } else {
        alert(`Tanque de ${elementId === 'water' ? 'água' : 'comida'} ${aumento ? 'cheio' : 'vazio'}!`);
    }
}

function aumentarNivel(elementId) {
    ajustarNivel(elementId, true);
}

function diminuirNivel(elementId) {
    ajustarNivel(elementId, false);
}
