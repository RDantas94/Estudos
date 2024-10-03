// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionar() {
    const nomeInput = document.getElementById("nome-amigo");
    const nomeAmigo = nomeInput.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este amigo já está na lista.");
        return;
    }

    amigos.push(nomeAmigo);
    nomeInput.value = ""; // Limpa o campo de entrada
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    amigos.forEach((amigo, index) => {
        // Cria um elemento de parágrafo para cada amigo
        const amigoElement = document.createElement("p");
        amigoElement.textContent = amigo;
        amigoElement.classList.add("amigo-item"); // Adiciona uma classe para estilização
        amigoElement.onclick = () => removerAmigo(index); // Adiciona um evento de clique para remover

        // Adiciona o elemento à lista de amigos
        listaAmigos.appendChild(amigoElement);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo da lista usando o índice
    atualizarListaAmigos(); // Atualiza a interface
}

// Função para sortear os amigos secretos
function sortear() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    const amigosSecretos = [...amigos]; // Copia a lista de amigos
    const resultado = {};

    // Enquanto houver amigos a sortear
    for (let amigo of amigos) {
        let amigoSorteado;

        // Continue tentando até encontrar um amigo que não seja o próprio
        do {
            const index = Math.floor(Math.random() * amigosSecretos.length);
            amigoSorteado = amigosSecretos[index];
        } while (amigoSorteado === amigo); // Verifica se o amigo sorteado é o próprio

        // Remove o amigo sorteado para não ser sorteado novamente
        amigosSecretos.splice(amigosSecretos.indexOf(amigoSorteado), 1);

        resultado[amigo] = amigoSorteado; // Associa o amigo ao amigo sorteado
    }

    mostrarResultado(resultado);
}

// Função para mostrar o resultado do sorteio
function mostrarResultado(resultado) {
    const listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = ""; // Limpa resultados anteriores

    for (let amigo in resultado) {
        listaSorteio.innerHTML += `${amigo} sorteou ${resultado[amigo]}<br>`;
    }
}

// Função para reiniciar o sorteio
function reiniciar() {
    amigos = []; // Limpa a lista de amigos
    atualizarListaAmigos(); // Atualiza a interface
    document.getElementById("lista-sorteio").innerHTML = ""; // Limpa os resultados do sorteio
}

// Adiciona evento para permitir a adição de amigo ao pressionar 'Enter'
document.getElementById("nome-amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        adicionar(); // Chama a função adicionar
        event.preventDefault(); // Evita o comportamento padrão do 'Enter' (como submit)
    }
});
