const titulos = document.querySelectorAll('.titulo');

titulos.forEach(function (titulo) {
    titulo.addEventListener('click', function (){
        const texto = titulo.nextElementSibling;

        if(texto.style.display === 'block'){
            texto.style.display = 'none';
        } else {
            texto.style.display = 'block';
        };
        
    });
});