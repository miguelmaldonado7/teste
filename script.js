const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Mostra o conteúdo e esconde o botão inicial
function mostrarConteudo() {
    // Mostra o conteúdo
    document.getElementById('conteudo').style.display = 'block';

    // Esconde o botão
    document.getElementById('botao').style.display = 'none';

    // Define o GIF como plano de fundo do body corretamente
    document.body.style.backgroundImage = 'url("happy.gif")'; 
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed'; // Mantém o fundo fixo enquanto rola a página
}


// Play e Pause
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '⏸';
  } else {
    audio.pause();
    playPauseButton.textContent = '▶️';
  }
}

// Atualiza a barra de progresso
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;

  // Atualiza tempo atual
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  durationDisplay.textContent = formatTime(audio.duration);
});

// Formatar tempo (minutos:segundos)
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Controle da barra de progresso
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

const body = document.body; // Seleciona o elemento <body>
const botao = document.getElementById('botao'); // Seleciona o botão pelo ID
function mostrarConteudo() {
    // Mostra o conteúdo
    document.getElementById('conteudo').style.display = 'block';

    // Esconde o botão
    botao.style.display = 'none';

    // Define o GIF como plano de fundo do body
    body.style.backgroundImage = 'url("happy.gif")'; // Substitua "fundo.gif" pelo nome do seu arquivo GIF

    // Opcional: Ajustes para o plano de fundo
    body.style.backgroundSize = 'cover'; // Para cobrir toda a tela
    body.style.backgroundRepeat = 'no-repeat'; // Para evitar repetição
    body.style.backgroundColor = 'transparent'; // Para tornar o fundo preto inicial transparente
}
function fuja(){
  var botaoNao = document.getElementById("nao")

  var larguraJanela = window.innerWidth;
  var alturaJanela  = window.innerHeight;

  var maxX = larguraJanela - botaoNao.offsetWidth;
  var maxY = alturaJanela - botaoNao.offsetHeight;
  
  var aleatorioX = Math.floor(Math.random() * maxX);
  var aleatorioY = Math.floor(Math.random() * maxY);

  botaoNao.style.left = aleatorioX + "px";
  botaoNao.style.top  = aleatorioY + "px";
  
}

function teamo(){
  
}

const botaoConfeti = document.querySelector('.sim');

botaoConfeti.addEventListener('click', function() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const botao = document.querySelector('.sim'); // Corrigido o seletor
  const meuH3 = document.getElementById('meuH3');
  const minhaimg = document.getElementById('minha')

  botao.addEventListener('click', function() {
    if (meuH3) {
      meuH3.classList.remove('oculto');
      meuH3.classList.add('visivel');
      minhaimg.classList.remove('oculto');
      minhaimg.classList.add('visivel');
    }
  });
});