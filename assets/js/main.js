function meuEscopo() {


const form = document.querySelector('#formulario');

function recebeEventosForm (e) {
    e.preventDefault();

    const formPeso = document.querySelector ('#peso');
    const formAltura = document.querySelector('#altura');

    const peso = Number(formPeso.value);

    const alturaConvertida = formAltura.value.replace(",",".");
    const altura = Number(alturaConvertida);
    
    const imc = IMC(peso, altura);
    const nivelImc = NivelIMC(imc);

    const msg = `IMC: ${imc.toFixed(1)} - ${nivelImc}.`
    

    escreverMensagem(msg, true);

    if (!peso && !altura) return escreverMensagem("Peso e Altura invalidos", false) ;
    if(!peso || peso >= 400 || peso < 5) return escreverMensagem("Peso invalido", false);
    if (!altura || altura >= 3.00 || altura < 0.90) return escreverMensagem("Altura invalida",false);
    

}

form.addEventListener('submit', recebeEventosForm)

}

meuEscopo();
