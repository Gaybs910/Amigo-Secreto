//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = ''; // Limpa o campo de input
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um nome aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome para sortear.');
        return;
    }

    // Escolhe um nome aleatório da lista
    const nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome sorteado na tela
    exibirResultado(nomeSorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(nomeSorteado) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; // Limpa o resultado anterior

    const mensagem = document.createElement('p');
    mensagem.textContent = `Nome sorteado: ${nomeSorteado}`;
    resultadoElement.appendChild(mensagem);
}
