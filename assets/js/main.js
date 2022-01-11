function meuEscopo() {

const form = document.querySelector('#formulario');

function recebeEventosForm (e) {
    e.preventDefault();

    const formPeso = document.querySelector ('#peso');
    const formAltura = document.querySelector('#altura');

    const peso = Number(formPeso.value);

    const alturaConvertida = formAltura.value.replace(",",".");
    const altura = Number(alturaConvertida);
    
    imc = getIMC(peso, altura);

    const grauImc = ['abaixo do peso','peso normal', 
    'sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obesidade grau 3'];


    if (!peso && !altura) { 
        resultado.innerHTML = "Peso e Altura invalidos"
        resultado.classList.add('invalido');
        return
    }
    else if (!peso || peso > 10000 || peso < 5) { 
        resultado.innerHTML = "Peso invalido"
        resultado.classList.add('invalido');
        return;
    }
    else if(!altura || altura > 3.00 || altura < 0.90) { 
        resultado.innerHTML = "Altura invalida"
        resultado.classList.add('invalido');
        return;
    }



    if (imc < 18.5)  escreverMensagem(`O seu IMC é: ${imc.toFixed(1)} e você está abaixo do peso.`) 
    else if (imc === 18.5 || imc <= 24.9) escreverMensagem(`O seu IMC é: ${imc.toFixed(1)} e você está com o peso normal.`) 
    else if (imc === 25 || imc <= 29.9)   escreverMensagem(`O seu IMC é: ${imc.toFixed(1)} e você está com sobrepeso.`)
    else if (imc === 30 || imc <= 34.9)   escreverMensagem(`O seu IMC é: ${imc.toFixed(1)} e você está com Obesidade grau 1.`) 
    else if (imc === 35 || imc <= 39.9)   escreverMensagem(`O seu IMC é: ${imc.toFixed(1)} e você está com Obesidade grau 2.`) 
    else escreverMensagem(`O seu IMC é: ${imc.toFixed(1)} e você está com Obesidade grau 3.`) 
    

}

form.addEventListener('submit', recebeEventosForm)

}

function getIMC(peso,altura) {
    return peso / (altura * altura)
}

function escreverMensagem(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.classList.remove('invalido');
    resultado.classList.add('valido');

    resultado.innerHTML = msg;
}




meuEscopo();