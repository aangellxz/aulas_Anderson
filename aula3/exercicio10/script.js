const botoesFechar = document.querySelectorAll('.btn-fechar');

botoesFechar.forEach(function (botao) {
  botao.addEventListener('click', function () {
    const card = botao.closest('.card');
    card.remove();
  });
});