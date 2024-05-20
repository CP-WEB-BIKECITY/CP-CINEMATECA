const images = ['./src/Imagens/Banner/banner.jpg', './src/Imagens/Banner/banner2.jpeg', './src/Imagens/Banner/banner3.jpg', './src/Imagens/Banner/banner4.jpeg'];
let currentIndex = 0;

function changeSlide() {
    const imageElement = document.getElementById('slideshow_image');
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Chama a função inicialmente para definir a primeira imagem do slideshow
changeSlide();

// Define um intervalo para chamar a função de mudar o slide a cada 5 segundos (5000 milissegundos)
setInterval(changeSlide, 5000);