// Variáveis de imagem
var ligado = "img/light-bulb-on.png";
var desligado = "img/light-bulb-off.png";
var quebrado = "img/light-bulb-broken.png";

var off = "img/light switch_off.png";
var on = "img/light switch_on.png";

// Váriaveis aleatórias
var cont = 0;
var tempNum = 0;
var contQuebrar = 0;
var isBroken = true;

// declaração de variáveis para os ids
var btn_reset = document.getElementById("reset");
var btn_replace = document.getElementById("btn_replace");
var lamp_img = document.getElementById("alvo-lampada");
var light_switch = document.getElementById("light_switch");
var switch_click = document.getElementById("switch_click");
var broken_glass_sound = document.getElementById("broken_glass_sound");
var impact_glass = document.getElementById("impact_glass");
var broken_glass_animation = document.getElementById("broken_glass");

// Função de piscar a lâmpada quando a página for carregada
window.onload = function () {

}

// Função de reset da lâmpada
function reset() {
    cont = 0; //Define a variável cont para zero novamente
    btn_reset.style.display = 'none'; //faz com que o botão de reset 'suma'
}

// Função de ligar
function ligar() {
    if (isBroken) {
        cont++;
        if (cont >= 30) {
            // Método de queimar
            lamp_img.src = "img/light-bulb-off.png";
            btn_reset.style.display = 'block';
            if (tempNum == 0) {
                light_switch.src = off;
                tempNum = 1;
                switch_click.play();
            }
            else {
                light_switch.src = on;
                tempNum = 0;
                switch_click.play();
            }
        }
        else {

            if (tempNum == 0) {
                lamp_img.src = desligado;
                light_switch.src = off;
                tempNum = 1;
                switch_click.play();
            }
            else {
                lamp_img.src = ligado;
                light_switch.src = on;
                tempNum = 0;
                switch_click.play();
            }
        }
    }
}

//Função de quebrar
// Está função é executada ao clicar na imagem da lâmpada
function quebrar() {
    if (contQuebrar < 10) {
        // Conta quantas vezes você pode clicar na lâmpada até quebrar
        contQuebrar++;
        impact_glass.play(); //toca o som de "impacto"
        lamp_img.style.transform = 'rotate(-10deg) scale(0.9)'; //"Inclina" e "afunda" a imagem
        // função de time out (Define um cronômetro para executar uma ação)
        setTimeout(function () {
            lamp_img.style.transform = 'rotate(0deg) scale(1)'; //volta para sua posição normal
            // após clicar 10 vezes, a lâmpada irá quebrar
            if (contQuebrar == 10) {
                lamp_img.src = quebrado; //troca a imagem para a lâmpada quebrada
                broken_glass_animation.style.display = 'block'; //faz com que a div com as animações dos cascos de vidro apareceça
                btn_replace.style.display = 'block'; //faz com que o botão de trocar apareça na tela
                broken_glass_sound.play(); // toca o som da lâmpada quebrando
                isBroken = false; //define a variável booleana como 'false' para com que a função de ligar não seja executada.
            }
        }, 100);
    }
}

// Função de troca
function trocar() {
    lamp_img.src = desligado; //troca a imagem para a lâmpada quebrada
    btn_replace.style.display = 'none'; //remove o botão de troca
    broken_glass_animation.style.display = 'none'; //reomve a div com a animação de quebrar
    contQuebrar = 0; //reseta o contador de quebrar para 0
    cont = 0; //reseta o cont normal
    btn_reset.style.display = 'none'; //desaparece com o botão de reset (Caso a função da lâmpada queimar for atividade antes da função quebrar)
    isBroken = true; //muda a variável boolean para true
}
