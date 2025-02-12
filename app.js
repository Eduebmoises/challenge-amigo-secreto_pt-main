//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Array para armazenar os nomes já sorteados
let sorteados = [];

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

    let amigoSorteado;

    // Sorteia até encontrar um nome válido
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

        // Verifica se o nome sorteado já foi sorteado antes
        if (sorteados.includes(amigoSorteado)) {
            continue; // Se já foi sorteado, tenta novamente
        }

        // Verifica se o nome sorteado é o próprio usuário
        if (amigoSorteado === "Seu Nome Aqui") { // Substitua "Seu Nome Aqui" pelo nome do usuário
            alert("Apareceu o seu próprio nome? Sorteando novamente...");
            continue; // Sorteia novamente
        }

        // Adiciona o nome sorteado ao array de sorteados
        sorteados.push(amigoSorteado);
        break; // Sai do loop quando um nome válido é encontrado

    } while (true);

    // Exibe o resultado do sorteio
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);
}