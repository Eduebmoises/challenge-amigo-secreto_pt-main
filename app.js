//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo); // Adiciona o nome ao array
        atualizarListaAmigos(); // Atualiza a lista exibida na tela
        inputAmigo.value = ""; // Limpa o campo de entrada
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    amigos.forEach((amigo, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa o resultado anterior

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const itemResultado = document.createElement('li');
    itemResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);
}