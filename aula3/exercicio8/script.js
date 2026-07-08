const barra = document.getElementById('barra-progresso');

window.addEventListener('scroll', function () {
  const scrollAtual = window.scrollY;
  const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;

  const porcentagem = (scrollAtual / alturaTotal) * 100;

  barra.style.width = porcentagem + '%';
});