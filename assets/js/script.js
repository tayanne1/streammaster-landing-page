// Seleciona o carrossel
const carrossel = document.querySelector('.carrosselfilmes');
const items = [...carrossel.children]; // Converte os itens em um array
const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(carrossel).gap); // Largura do item com gap
let scrollAmount = 0; // Quantidade de deslocamento atual
let isAutoScrolling = true; // Variável para controle de pausa

// Verifica se os itens já foram duplicados
if (!carrossel.dataset.duplicado) {
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carrossel.appendChild(clone);
  });
  carrossel.dataset.duplicado = "true"; // Marca que os itens foram duplicados
}

// Função para iniciar o movimento contínuo
function startCarousel() {
  const scrollSpeed = 1; // Velocidade de rolagem (menor valor = mais lento)

  setInterval(() => {
    if (isAutoScrolling) {
      scrollAmount += scrollSpeed;
      carrossel.scrollLeft = scrollAmount;

      // Reinicia o carrossel ao atingir o final dos itens
      if (scrollAmount >= carrossel.scrollWidth / 2) {
        scrollAmount = 0; // Reseta para o início sem causar "pulo"
      }
    }
  }, 10); // Intervalo para suavidade
}

// Adiciona evento para pausar o scroll ao passar o mouse
carrossel.addEventListener('mouseenter', () => (isAutoScrolling = false));
carrossel.addEventListener('mouseleave', () => (isAutoScrolling = true));

// Inicia o carrossel ao carregar a página
window.addEventListener('load', startCarousel);
