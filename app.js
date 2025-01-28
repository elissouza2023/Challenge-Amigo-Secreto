let listaDeAmigos = [];
let nomesSorteados = [];

// para funcionar o botão adicionar um amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo.trim() !== '') {
        listaDeAmigos.push(nomeAmigo);
        console.log(listaDeAmigos);
        exibirListaDeAmigos();
        document.getElementById('amigo').value = ''; // Limpa o campo de input
    } else {
        console.log('Por favor, digite um nome!');
    }
}

// para fazer funcionar a exibição da lista de amigos no HTML noitem ul com id listaAmigos
function exibirListaDeAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpa a lista antes de reexibir

    listaDeAmigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
}

// para criar ação no botão para sortear um amigo
function sortearAmigo() {
    if (listaDeAmigos.length > 0) {
        let codigoIndexacao = Math.floor(Math.random() * listaDeAmigos.length);
        console.log('Amigo sorteado foi:', listaDeAmigos[codigoIndexacao]);
        exibirResultado(listaDeAmigos[codigoIndexacao]);
    } else {
        console.log('Nenhum amigo na lista para sortear.');
    }
}

// para exibir o resultado do sorteio no html no item ul com id resultado
function exibirResultado(nomeAmigo) {
    const ul = document.getElementById('resultado');
    ul.innerHTML = ''; // Limpa qualquer conteúdo anterior
    const li = document.createElement('li');
    li.textContent = 'O Amigo Sorteado Foi: ' + nomeAmigo;
    ul.appendChild(li);
}
