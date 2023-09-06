let autoModeInterval;

// Ligando a Luz Vermelha
function pare() {
  clearInterval(autoModeInterval); // Desliga o Modo Automático (SOMENTE QUANDO A LUZ VERMELHA ESTIVER ATIVA)
  document.querySelector('.vermelho').classList.remove('desligado');
  document.querySelector('.amarelo').classList.add('desligado');
  document.querySelector('.verde').classList.add('desligado');
}

// Ligando a Luz Amarela
function atencao() {
  clearInterval(autoModeInterval); // Desliga o Modo Automático (SOMENTE QUANDO A LUZ VERMELHA ESTIVER ATIVA)
  document.querySelector('.vermelho').classList.add('desligado');
  document.querySelector('.amarelo').classList.remove('desligado');
  document.querySelector('.verde').classList.add('desligado');
}

// Ligando a Luz Verde
function siga() {
  clearInterval(autoModeInterval); // Desliga o Modo Automático (SOMENTE QUANDO A LUZ VERMELHA ESTIVER ATIVA)
  document.querySelector('.vermelho').classList.add('desligado');
  document.querySelector('.amarelo').classList.add('desligado');
  document.querySelector('.verde').classList.remove('desligado');
}


// Ativando o Modo Automático
function auto() {

  document.querySelector('.vermelho').classList.remove('desligado');
  document.querySelector('.amarelo').classList.add('desligado');
  document.querySelector('.verde').classList.add('desligado');

  // Gera um Loop
  autoModeInterval = setInterval(function () {

    // Espaço de Tempo para o ligamento das cores

    // Siga
    document.querySelector('.vermelho').classList.add('desligado');
    document.querySelector('.amarelo').classList.add('desligado');
    document.querySelector('.verde').classList.remove('desligado');

    setTimeout(function () {
      // Atenção
      document.querySelector('.vermelho').classList.add('desligado');
      document.querySelector('.amarelo').classList.remove('desligado');
      document.querySelector('.verde').classList.add('desligado');
    }, 5000); // Delay para a cor ligar após apertar o Botão
    setTimeout(function () {
      // Pare
      document.querySelector('.vermelho').classList.remove('desligado');
      document.querySelector('.amarelo').classList.add('desligado');
      document.querySelector('.verde').classList.add('desligado');
    }, 7000);
  }, 13500); // Retorna ao Loop depois de 13,5 segundos
}



// Apagando todas as Luzes
function reset() {
  clearInterval(autoModeInterval); // Desliga o Modo Automático (SOMENTE QUANDO A LUZ VERMELHA ESTIVER ATIVA)
  document.querySelector('.vermelho').classList.add('desligado');
  document.querySelector('.amarelo').classList.add('desligado');
  document.querySelector('.verde').classList.add('desligado');
}           
