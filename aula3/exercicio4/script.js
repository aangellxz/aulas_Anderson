const linhas = document.querySelectorAll('#corpo-tabela tr');

linhas.forEach(function (linha) {
  linha.addEventListener('click', function () {

    // Remove a classe "selected" de todas as linhas
    linhas.forEach(function (l) {
      l.classList.remove('selected');
    });

    // Adiciona a classe "selected" só na linha clicada
    this.classList.add('selected');
  });
});