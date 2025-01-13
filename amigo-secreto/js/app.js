let listaAmigos = []

const adicionar = () => {
    let novoNome = document.getElementById('nome-amigo');
    let listaNomes = document.getElementById('lista-amigos');
    let amigosverificados = listaAmigos.map(nome => nome.toLowerCase())

    if (novoNome.value === ''){
        alert('Por favor, insira o nome do amigo.');
    }else if(amigosverificados.includes(novoNome.value.toLowerCase())){
        alert('Este nome ja foi adicionado!')
    }else{
        listaAmigos.push(novoNome.value)
        if(listaNomes.textContent == ''){
            listaNomes.textContent = novoNome.value;
        }else{
            listaNomes.textContent = listaNomes.textContent + ', ' + novoNome.value;
        }
    }
    novoNome.value = ''
}

const sortear = () => {
    embaralhar(listaAmigos)

    let sorteio = document.getElementById('lista-sorteio')

    if(listaAmigos.length < 3){
        alert('É necessário adicionar mais amigos para realizar o sorteio')
    }else{
        for(let i = 0; i < listaAmigos.length; i++){
            if(i == listaAmigos.length-1){
                sorteio.innerHTML += listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>'
            }else{
                sorteio.innerHTML += listaAmigos[i] + ' --> ' + listaAmigos[i+1] + '<br>'
            }
        }
    }
}

const embaralhar = (lista) => {
    for (let i = lista.length; i; i--) {

        const indiceAleatorio = Math.floor(Math.random() * i);

        [lista[i - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[i - 1]];
    }
}

const reiniciar = () => { 
    listaAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}