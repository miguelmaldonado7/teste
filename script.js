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
  const minhaimg = document.getElementById('teste')
  const meuH4 = document.getElementById('meuH4')
  const contagem = document.getElementById('tempoApaixonado')
  const container = document.getElementById('container')

  botao.addEventListener('click', function() {
    if (meuH3) {
      meuH3.classList.remove('oculto');
      meuH3.classList.add('visivel');
      minhaimg.classList.remove('oculto');
      minhaimg.classList.add('visivel');
      meuH4.classList.remove('oculto');
      meuH4.classList.add('visivel');
      contagem.classList.remove('oculto');
      contagem.classList.add('visivel');
      container.classList.remove('oculto');
      container.classList.add('visivel');

    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const dataInicio = new Date('2024-12-04T14:42:00');
  const mesesElement = document.getElementById('meses');
  const diasElement = document.getElementById('dias');
  const horasElement = document.getElementById('horas');
  const minutosElement = document.getElementById('minutos');
  const segundosElement = document.getElementById('segundos');

  function atualizarContagem() {
      const agora = new Date();
      const diferencaEmMilissegundos = agora.getTime() - dataInicio.getTime();

      // Cálculos
      const segundosTotais = Math.floor(diferencaEmMilissegundos / 1000);
      const minutosTotaisGeral = Math.floor(segundosTotais / 60);
      const horasTotais = Math.floor(minutosTotaisGeral / 60);
      const diasTotais = Math.floor(horasTotais / 24);

      const anos = Math.floor(diasTotais / 365.25); // Considera anos bissextos de forma aproximada
      const meses = Math.floor((diasTotais % 365.25) / 30.44); // Considera meses com média de dias
      const dias = Math.floor((diasTotais % 365.25) % 30.44);
      const horas = horasTotais % 24;
      const minutos = minutosTotaisGeral % 60;
      const segundos = segundosTotais % 60;

      mesesElement.textContent = `${anos * 12 + meses} meses`;
      diasElement.textContent = `${dias} dias`;
      horasElement.textContent = `${horas} horas`;
      minutosElement.textContent = `${minutos} minutos`;
      segundosElement.textContent = `${segundos} segundos`;
  }

  // Atualiza a contagem a cada segundo
  setInterval(atualizarContagem, 1000);

  // Chama a função uma vez para exibir os valores iniciais
  atualizarContagem();
}); 