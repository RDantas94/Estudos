// Inicializa o carrinho com um celular e o valor total
let carrinho = [
    { nome: "Celular", preco: 1400, quantidade: 1 }
];
let valorTotal = 1400;

// Função para adicionar o produto selecionado ao carrinho
function adicionar() {
    const selectProduto = document.getElementById("produto");
    const quantidadeInput = document.getElementById("quantidade");

    // Pega o valor do produto selecionado e a quantidade
    const produtoSelecionado = selectProduto.value;
    const quantidade = parseInt(quantidadeInput.value);

    // Extraindo o nome do produto e o valor
    const [nomeProduto, precoProduto] = produtoSelecionado.split(" - R$");

    // Convertendo o valor do produto para número
    const preco = parseFloat(precoProduto);

    // Adiciona o produto e a quantidade ao carrinho
    carrinho.push({
        nome: nomeProduto,
        preco: preco,
        quantidade: quantidade
    });

    // Atualiza o valor total
    valorTotal += preco * quantidade;

    // Atualiza a exibição do carrinho e do total
    atualizarCarrinho();
}

// Função para limpar completamente o carrinho de compras
function limpar() {
    // Limpa completamente o carrinho e zera o valor total
    carrinho = [];
    valorTotal = 0;

    // Atualiza a exibição do carrinho e do total
    atualizarCarrinho();
}

// Função para atualizar a exibição dos produtos no carrinho e o valor total
function atualizarCarrinho() {
    const listaProdutos = document.getElementById("lista-produtos");
    const valorTotalElemento = document.getElementById("valor-total");

    // Limpa os produtos da exibição
    listaProdutos.innerHTML = "";

    // Atualiza a lista de produtos no carrinho
    carrinho.forEach(produto => {
        const itemProduto = document.createElement("section");
        itemProduto.classList.add("carrinho__produtos__produto");
        itemProduto.innerHTML = `
        <span class="texto-azul">${produto.quantidade}x</span> ${produto.nome} <span class="texto-azul">R$${produto.preco * produto.quantidade}</span>
      `;
        listaProdutos.appendChild(itemProduto);
    });

    // Atualiza o valor total na exibição
    valorTotalElemento.innerHTML = `R$${valorTotal}`;
}

// Inicializa a exibição do carrinho ao carregar a página
window.onload = function () {
    atualizarCarrinho();
};
