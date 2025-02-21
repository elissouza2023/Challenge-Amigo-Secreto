let listaDeAmigos = [];
let nomesSorteados = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo.trim() !== '') {
        listaDeAmigos.push(nomeAmigo);
        console.log("Lista de amigos atualizada:", listaDeAmigos);
        exibirListaDeAmigos();
        document.getElementById('amigo').value = ''; // Limpa o campo de input
    } else {
        console.log('Por favor, digite um nome!');
    }
}

// Função para exibir a lista de amigos no HTML
function exibirListaDeAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpa a lista antes de reexibir

    listaDeAmigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaDeAmigos.length > 0) {
        let codigoIndexacao = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos.splice(codigoIndexacao, 1)[0]; // Remove e retorna o sorteado
        
        nomesSorteados.push(amigoSorteado);
        console.log('Amigo sorteado:', amigoSorteado);
        console.log('Lista de sorteados:', nomesSorteados);
        
        exibirResultado(amigoSorteado);
    }

    // Se todos os amigos foram sorteados, exibir mensagem
    if (listaDeAmigos.length === 0 && nomesSorteados.length > 0) {
        exibirResultado('Todos os amigos foram sorteados.');
    }
}

// Função para exibir o resultado do sorteio
function exibirResultado(mensagem) {
    const ul = document.getElementById('resultado');
    ul.innerHTML = ''; // Limpa qualquer conteúdo anterior
    const li = document.createElement('li');
    li.textContent = mensagem;
    ul.appendChild(li);

    // Chamar a API de voz corretamente
    responsiveVoice.speak(mensagem, 'Brazilian Portuguese Female', { rate: 1.2 });
}

// Função para resetar o sorteio (chamada pelo botão)
function resetarSorteio() {
    listaDeAmigos = [];
    nomesSorteados = [];

    // Limpa a exibição das listas na interface
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    console.log("Novo sorteio iniciado! Adicione novos amigos.");
}

// Adicionando evento ao botão para resetar sorteio
document.getElementById('btnResetar').addEventListener('click', resetarSorteio);
