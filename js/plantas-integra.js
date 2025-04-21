const imagens = document.querySelectorAll('.midias img');
const modal = document.getElementById('modal-foto');
const imagemModal = document.getElementById('imagem-modal');
const overlay = document.getElementById('overlay');
const fechar = document.getElementById('fechar');
const anterior = document.getElementById('anterior');
const proximo = document.getElementById('proximo');

let indiceAtual = 0;
const srcs = Array.from(imagens).map(img => img.src);

imagens.forEach((img, index) => {
  img.addEventListener('click', () => {
    indiceAtual = index;
    imagemModal.src = srcs[indiceAtual];
    modal.style.display = 'flex';
  });
});

fechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
});

anterior.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + srcs.length) % srcs.length;
  imagemModal.src = srcs[indiceAtual];
});

proximo.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % srcs.length;
  imagemModal.src = srcs[indiceAtual];
});
const botoes = document.querySelectorAll('.pagina-btn');
    const paginas = [
      document.querySelector('.primeira-pagina'),
      document.querySelector('.segunda-pagina'),
      document.querySelector('.terceira-pagina')
    ];

    function mostrarPagina(index) {
      paginas.forEach((pagina, i) => {
        pagina.style.display = i === index ? 'block' : 'none';
      });

      botoes.forEach((botao, i) => {
        botao.classList.toggle('ativo', i === index);
      });
    }

    botoes.forEach(botao => {
      botao.addEventListener('click', () => {
        const paginaSelecionada = parseInt(botao.getAttribute('data-pagina')) - 1;
        mostrarPagina(paginaSelecionada);
      });
    });

    mostrarPagina(0); // Exibe a primeira página ao iniciar