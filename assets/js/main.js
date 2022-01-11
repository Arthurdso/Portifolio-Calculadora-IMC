function meuEscopo() {
const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

function recebeEventosForm (e) {
    e.preventDefault();

    const formPeso = document.querySelector ('#peso');
    const formAltura = document.querySelector('#altura');

    let peso = Number(formPeso.value);

    let alturaConvertida = formAltura.value.replace(",",".");
    let altura = Number(alturaConvertida);
    
    imc = getIMC(peso, altura);


    // if else validacao peso altura


    if (!peso && !altura) { 
        resultado.innerHTML = "Peso e Altura invalidos"
        resultado.classList.add('invalido');
        return
    }
    else if (!peso) { 
        resultado.innerHTML = "Peso invalido"
        resultado.classList.add('invalido');
        return;
    }
    else if(!altura) { 
        resultado.innerHTML = "Altura invalida"
        resultado.classList.add('invalido');
        return;
    }

    // if else validação imc

    if (imc < 18.5)  resultado.innerHTML = `O seu IMC é: ${imc.toFixed(1)} e você está abaixo do peso.`
    else if (imc === 18.5 || imc <= 24.9) resultado.innerHTML = `O seu IMC é: ${imc.toFixed(1)} e você está com o peso normal.`
    else if (imc === 25 || imc <= 29.9)  resultado.innerHTML = `O seu IMC é: ${imc.toFixed(1)} e você está com sobrepeso.`
    else if (imc === 30 || imc <= 34.9) resultado.innerHTML = `O seu IMC é: ${imc.toFixed(1)} e você está com Obesidade grau 1.`
    else if (imc === 35 || imc <= 39.9) resultado.innerHTML = `O seu IMC é: ${imc.toFixed(1)} e você está com Obesidade grau 2.`
    else resultado.innerHTML = `O seu IMC é: ${imc.toFixed(1)} e você está com Obesidade grau 3.`
    

}

form.addEventListener('submit', recebeEventosForm)

}

function getIMC(peso,altura) {
    return peso / (altura * altura)
}


meuEscopo();