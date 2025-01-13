let totalCarrinho = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0,00';

const adicionar = () => {
    const itemSelecionado = document.getElementById('produto').value
    const quantidade = document.getElementById('quantidade').value
    let produto = itemSelecionado.split('-')[0];
    let valorProduto = itemSelecionado.split('R$')[1];
    
    if(quantidade === "" || quantidade <= 0) {
        alert("Por favor, preencha a quantidade do produto")
    }else{
        novoItemCarrinho(quantidade, produto, valorProduto);
        document.getElementById('quantidade').value = '';
    }
}

const novoItemCarrinho = (quantidade, produto, valor) => {
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${valor}</span>
        </section>`
    let total = quantidade * valor
    atualizarTotal(total)
}

const atualizarTotal = (valor) => {
    let total = document.getElementById('valor-total');
    totalCarrinho += valor
    total.textContent = `R$ ${totalCarrinho},00`;

}

const limpar = () => {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';    
}
