let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let botao = game.querySelector('.dashboard__item__button');
    let imagem = game.querySelector('.dashboard__item__img');
    let nomeJogo = game.querySelector('.dashboard__item__name');

    if (botao.textContent === "Alugar") {
        botao.textContent = "Devolver";
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        jogosAlugados++;
    } else {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            botao.textContent = "Alugar";
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            jogosAlugados--;
        }
    }

    contarEExibirJogosAlugados();

}

document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});