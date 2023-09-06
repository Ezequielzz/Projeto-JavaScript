const selectPlayerDiv = document.querySelector(".select-player");
const mainGame = document.querySelector("main");
const currentPlayer = document.querySelector(".currentPlayer");
let selected = Array(9).fill(""); // Array para rastrear as jogadas em cada célula
let player = ""; // Começa com jogador indefinido
let gameOver = false; // Flag para controlar o término do jogo

function selectPlayer(selectedPlayer) {
    player = selectedPlayer;
    selectPlayerDiv.style.display = "none"; // Esconde a tela de seleção de jogador
    mainGame.style.display = "block"; // Exibe o tabuleiro de jogo
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`; // Define o jogador ativo
    init(); // Inicia o jogo após a seleção
}

// Resto do seu código JavaScript permanece inalterado...


// Resto do seu código JavaScript permanece inalterado...

function init() {
    selected = Array(9).fill(""); // Reinicia o array de jogadas
    currentPlayer.innerHTML = `VEZ DO: ${player}`; // Inicia com o jogador selecionado
    gameOver = false; // Reinicia o jogo
    document.querySelectorAll(".casas button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    });
}

function newMove(e) {
    if (gameOver || e.target.innerHTML !== "") return; // Impede jogadas em células já preenchidas
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player;
    selected[index - 1] = player; // Armazena a jogada no array
    player = player === "X" ? "O" : "X"; // Alterna entre jogadores
    currentPlayer.innerHTML = `VEZ DO: ${player}`;
    checkWinner();
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6] // Diagonais
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (selected[a] && selected[a] === selected[b] && selected[a] === selected[c]) {
            currentPlayer.innerHTML = `JOGADOR ${selected[a]} VENCEU!`;
            gameOver = true;
            return;
        }
    }

    if (!selected.includes("")) {
        currentPlayer.innerHTML = "Deu Velha!";
        gameOver = true;
    }
}
function replay() {
    selectPlayerDiv.style.display = "block"; // Exibe a tela de seleção de jogador novamente
    mainGame.style.display = "none"; // Esconde o tabuleiro de jogo
    currentPlayer.innerHTML = ""; // Limpa a mensagem do jogador da vez
    init(); // Reinicia o jogo
}

