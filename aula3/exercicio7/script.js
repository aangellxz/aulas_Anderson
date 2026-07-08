const formCausa = document.getElementById('form-causa');
const inputCausa = document.getElementById('input-causa');
const listaCausas = document.getElementById('lista-causas');

formCausa.addEventListener('submit', function (event) {
  event.preventDefault();

  const texto = inputCausa.value.trim();

  if (texto === '') {
    return;
  }

  const novoItem = document.createElement('li');
  novoItem.textContent = texto;

  listaCausas.appendChild(novoItem);

  inputCausa.value = '';
});