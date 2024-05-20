// SLIDESHOW
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

// TROCAR A COR DO BACKGROUND
function trocar(corDeFundo) {
    // Trocar a cor de fundo do body
    document.body.style.backgroundColor = corDeFundo;

    const textoSobreImagem = document.querySelector('.texto-sobre-imagem');
    textoSobreImagem.style.background = `linear-gradient(to top, ${corDeFundo}, rgba(0, 0, 0, 0.342))`;
}