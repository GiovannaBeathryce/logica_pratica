const sortear = () => {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numeros = [];

    for (let i = 0; i < quantidade; i++) {
        let numeroSoerteado = gerarNumeroAleatorio(de, ate)
        if(!numeros.includes(numeroSoerteado)){
            numeros.push(numeroSoerteado);
        }else{
            i--
        }
    }
    
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeros}.</label>`
    trocarStatusBotao()
}

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const trocarStatusBotao = () =>{
    let botao = document.getElementById('btn-reiniciar')
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    }else{
        botao.classList.add('container__botao-desabilitado')
        botao.classList.remove('container__botao')
    }
}

const reiniciar = () => {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value= '';

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`

    trocarStatusBotao()
} 
