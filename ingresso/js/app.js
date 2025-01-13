const comprar = () => {
    let tipo = document.getElementById('tipo-ingresso')
    let quantidade = parseInt(document.getElementById('qtd').value)

    if(quantidade <= 0){
        alert('Selecione uma quantidade válida.')
    }else{
        if (tipo.value === 'pista'){
            comprarPista(quantidade)
        }else if (tipo.value === 'superior'){
            comprarSuperior(quantidade)
            }else{
            comprarInferior(quantidade)
        }
    }


    document.getElementById('qtd').value = ''
}

const comprarPista = (quantidade) => {
    let qtdPista = document.getElementById('qtd-pista');
    let totalPista = parseInt(qtdPista.textContent)
    
    if(quantidade > qtdPista.textContent){
        alert('Quantidade de ingressos insuficiente para Pista.')
    }else{
        totalPista -= quantidade
        qtdPista.textContent = totalPista
        alert('Compra realizada com sucesso!')
    }
}

const comprarSuperior = (quantidade) => {
    let qtdSuperior = document.getElementById('qtd-superior');
    let totalSuperior = parseInt(qtdSuperior.textContent);
    
    if(quantidade > qtdSuperior.textContent){
        alert('Quantidade de ingressos insuficiente para Cadeiras superiores.')
    }else{
        totalSuperior -= quantidade
        qtdSuperior.textContent = totalSuperior;
        alert('Compra realizada com sucesso!')
    }
}

const comprarInferior = (quantidade) => {
    let qtdInferior = document.getElementById('qtd-inferior');
    let totalInferior = parseInt(qtdInferior.textContent)
    
    if(quantidade > qtdInferior.textContent){
        alert('Quantidade de ingressos insuficiente para Cadeiras inferiores.')
    }else{
        totalInferior -= quantidade
        qtdInferior.textContent = totalInferior
        alert('Compra realizada com sucesso')
    }
}