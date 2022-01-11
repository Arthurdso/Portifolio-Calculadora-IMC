function IMC(peso,altura) {
    return peso / (altura * altura)
}

function NivelIMC(imc) { 
    const grauImc = ['Abaixo do peso','Peso normal','Sobrepeso', 
    'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.0) return grauImc[5];
    if (imc >= 34.9) return grauImc[4];
    if (imc >= 29.9) return grauImc[3];
    if (imc >= 24.9) return grauImc[2];
    if (imc >= 18.5) return grauImc[1];
    if (imc < 18.5)  return grauImc[0];
}
