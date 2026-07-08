const botao = document.getElementById('botao');

botao.addEventListener('click', function (){
     document.body.classList.toggle('dark-mode');

     if (document.body.classList.contains('dark-mode')) {
    botao.textContent = 'Desativar Modo Escuro';
  } else {
    botao.textContent = 'Ativar Modo Escuro';
  };
});