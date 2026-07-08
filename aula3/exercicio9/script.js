const senha = document.getElementById('senha');
const aviso = document.getElementById('aviso-senha');

senha.addEventListener('input', function () {
  const quantidade = senha.value.length;

  if (quantidade < 8) {
    aviso.textContent = 'Senha muito curta!';
    aviso.classList.remove('senha-forte');
    aviso.classList.add('senha-curta');
  } else {
    aviso.textContent = 'Comprimento aceito!';
    aviso.classList.remove('senha-curta');
    aviso.classList.add('senha-forte');
  }
});