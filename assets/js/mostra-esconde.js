const icone = document.querySelector('.img-icone');
const mostra = document.querySelector('#tabela');
const mostraTitulo = document.querySelector('#titulo');
const esconde = document.querySelector('.nao-esconde');
const arrumaAlinhamento = document.querySelector('#alinhado');
const alinhamentoTitulo = document.querySelector('.titulo-2');

icone.addEventListener('click', () => {
    mostra.classList.toggle('container-tabela')
    mostraTitulo.classList.toggle('esconde')
    icone.classList.toggle('ativo');
    arrumaAlinhamento.classList.toggle('mostra');
    alinhamentoTitulo.classList.toggle('titulo-2')
})