const divSelecionarJogador = document.querySelector(".selecionar-jogador");
const mainGame = document.querySelector("main");
const jogadorVez = document.querySelector(".jogadorVez");
let selected = Array(9).fill(""); //array para rastrear as jogadas em cada casa
let player = ""; //começa com jogador indefinido
let gameOver = false; //controla o fim do jogo
var risada = document.getElementById("risada"); //audio para quando der velha
var botao = document.getElementById("botao"); //audio para quando apertar as casas do jogo

function selecionarJogador(jogadorSelecionado) {
    player = jogadorSelecionado; //atribui o valor do jogador selecionado a variável player
    divSelecionarJogador.style.display = "none"; //esconde a tela de seleção de jogador
    mainGame.style.display = "block"; //mostra o tabuleiro de jogo na tela
    jogadorVez.innerHTML = `VEZ DO: ${player}`; //define o jogador ativo e mostra na tela quem é
    iniciar(); //inicia o jogo depois da seleção
}

function iniciar() {
    selected = Array(9).fill(""); //reinicia o array de jogadas com a string vazia, ou seja sem X ou O
    jogadorVez.innerHTML = `VEZ DO: ${player}`; //inicia com o jogador selecionado e mostra quem é
    gameOver = false; //define a variavel como false, ou seja o jogo só ira reiniciar quando for true
   //seleciona todos os botões da area do tabuleiro 
    document.querySelectorAll(".casas button").forEach((item) => {
        item.innerHTML = ""; //limpa o conteúdo HTML do botão, tira os X e O
        item.addEventListener("click", newMove); //esse botao "ouve" e quando for clicado vai executar o newMove, que deixa os jogadores escolherem a casa para preencher
        
    });
}

function newMove(e) {
    //se gamer over for true ou tiver X ou O na casa ele vai impedir a jogada
    if (gameOver || e.target.innerHTML !== "") return; 
    //aqui é aonde atualiza qual casa foi clicada
    const index = e.target.getAttribute("casa-i");
    //define o conteudo da casa clicada com X ou O dependendo do jogador ativo, que ta armazenado na variável player
    e.target.innerHTML = player; 
    //guarda a jogada do jogador no array,que vai ser usado para verificar se alguém venceu o jogo
    selected[index - 1] = player; 
    player = player === "X" ? "O" : "X"; //alterna os jogadores
    jogadorVez.innerHTML = `VEZ DO: ${player}`;//atualiza de quem é a vez na tela
    botao.play();//som para quando clicar nas casas
    //verifica se tem ganhador ou empate
    checkWinner();
}

function checkWinner() {
    //define matrizes com as combinacoes de vitorias
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //colunas
        [0, 4, 8], [2, 4, 6] //diagonais
    ];
//aqui o codigo dentro do for vai ser executado uma vez para cada combinacao
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
          //aqui verifica se as 3 células nas posições (a b c) tem o mesmo, ou seja se as 3 são X ou O
        if (selected[a] && selected[a] === selected[b] && selected[a] === selected[c]) {
            //mensagem mostrada no jogadorVez é atualizada p/ mostrar q o jogador com o simbolo mostrado em selected[a] venceu o jogo
            jogadorVez.innerHTML = `JOGADOR ${selected[a]} VENCEU!`;
            //aqui como o gamerOver esta true mostra que ele terminou e pode ser reiniciado
            gameOver = true;
            //se ja foi encontardo um ganhador ele interrompe para nao continuar procurando combinacoes
            return;
        }
    }
     //verifica se nao tem mais casas vazias, sem X ou O
     //se for verdade mostra que nao teve ganhador
    if (!selected.includes("")) {
        //ent mostra essa mensagem
        jogadorVez.innerHTML = "Deu Velha!";
        //e toca esse som
        risada.play();
        //indica que o jogo terminou
        gameOver = true;
    }
}

function JogarNovamente() {
    divSelecionarJogador.style.display = "block"; //exibe a tela de seleção de jogador de novo
    mainGame.style.display = "none"; //esconde o tabuleiro de jogo
    jogadorVez.innerHTML = ""; //limpa a mensagem do jogador da vez
    iniciar(); //reinicia o jogo
}