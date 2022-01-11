function escreverMensagem(msg, éValido) {
    const resultado = document.querySelector('#resultado')
    
    if (éValido) {
        resultado.classList.remove('invalido');
        resultado.classList.add('valido');
    }else {
        resultado.classList.add('invalido')
    }
    
    resultado.innerHTML = msg;
}

