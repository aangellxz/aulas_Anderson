const comentario = document.getElementById('comentario');
const contador = document.getElementById('contador');
const btnEnviar = document.getElementById('btn-enviar');

comentario.addEventListener('input', function () {
  const quantidade = comentario.value.length;

  contador.textContent = quantidade + ' / 200 caracteres';

  if (quantidade > 200) {
    contador.classList.add('limite-excedido');
    btnEnviar.disabled = true;
  } else {
    contador.classList.remove('limite-excedido');
    btnEnviar.disabled = false;
  }
});