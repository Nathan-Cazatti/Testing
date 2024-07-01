document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById('flexSwitchCheckDefault');
    const img = document.getElementById('imagem');

    checkbox.addEventListener('change', function() {
        if (img.src.includes('https://img.freepik.com/premium-photo/mountain-lake-with-mountain-background_865967-416815.jpg')) {
            img.src = 'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg';
        } else {
            img.src = 'https://img.freepik.com/premium-photo/mountain-lake-with-mountain-background_865967-416815.jpg';
        }
    });
});