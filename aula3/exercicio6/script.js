const video = document.getElementById('video');
const btnPlay = document.getElementById('btn-play');
const btnPause = document.getElementById('btn-pause');
const btnVolume = document.getElementById('btn-volume');

btnPlay.addEventListener('click', function () {
  video.play();
});

btnPause.addEventListener('click', function () {
  video.pause();
});

btnVolume.addEventListener('click', function () {
  if (video.volume === 1) {
    video.volume = 0.2;
  } else {
    video.volume = 1;
  }
});

video.addEventListener('ended', function () {
  alert('Vídeo finalizado! Treinamento concluído.');
});