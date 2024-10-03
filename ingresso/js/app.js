// Quantidade inicial de ingressos disponíveis por setor
let ingressosDisponiveis = {
    pista: 100,
    superior: 200,
    inferior: 400
};

// Função para realizar a compra
function comprar() {
    // Recuperar o tipo de ingresso selecionado e a quantidade desejada
    const tipoIngresso = document.getElementById("tipo-ingresso").value;
    const quantidadeDesejada = parseInt(document.getElementById("qtd").value);

    // Verificar se a quantidade é válida
    if (isNaN(quantidadeDesejada) || quantidadeDesejada <= 0) {
        alert("Por favor, insira uma quantidade válida de ingressos.");
        return;
    }

    // Verificar se o setor selecionado tem ingressos disponíveis
    if (ingressosDisponiveis[tipoIngresso] <= 0) {
        alert("Os ingressos para este setor estão esgotados.");
        return;
    }

    // Verificar se há ingressos suficientes no setor selecionado
    if (quantidadeDesejada > ingressosDisponiveis[tipoIngresso]) {
        alert("A quantidade desejada supera o limite de ingressos disponíveis.");
        return;
    }

    // Atualiza a quantidade de ingressos restantes
    ingressosDisponiveis[tipoIngresso] -= quantidadeDesejada;

    // Atualiza a interface com as novas quantidades
    atualizarQuantidades();

    // Exibe a mensagem de compra realizada com sucesso
    alert(`Compra realizada com sucesso! Você comprou ${quantidadeDesejada} ingresso(s) para o setor ${tipoIngresso}.`);
}

// Função para atualizar a exibição das quantidades de ingressos disponíveis
function atualizarQuantidades() {
    document.getElementById("qtd-pista").textContent = ingressosDisponiveis.pista;
    document.getElementById("qtd-superior").textContent = ingressosDisponiveis.superior;
    document.getElementById("qtd-inferior").textContent = ingressosDisponiveis.inferior;
}

// Inicializar as quantidades ao carregar a página
window.onload = function () {
    atualizarQuantidades();
};
