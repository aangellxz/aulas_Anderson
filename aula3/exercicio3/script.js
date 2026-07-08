const busca = document.getElementById('busca');
const produtos = document.querySelectorAll('.produto');

busca.addEventListener('input', function () {
  const termo = busca.value.toLowerCase();

  produtos.forEach(function (produto) {
    const nome = produto.querySelector('.nome-produto').textContent.toLowerCase();

    if (nome.includes(termo)) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
});