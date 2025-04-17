const modal = document.getElementById("modalImagem");
const modalImg = document.getElementById("imgModal");
const fechar = document.querySelector(".fechar");
const btnAnterior = document.querySelector(".anterior");
const btnProxima = document.querySelector(".proxima");

const imagens = document.querySelectorAll(".imagem-centro img");
let indiceAtual = 0;

// Abrir o modal com a imagem clicada
imagens.forEach((img, index) => {
  img.addEventListener("click", () => {
    indiceAtual = index;
    abrirModal(img.src);
  });
});

function abrirModal(src) {
  modal.style.display = "flex";
  modalImg.src = src;
}

// Fechar o modal
fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Botão Próxima
btnProxima.addEventListener("click", (e) => {
  e.stopPropagation();
  indiceAtual = (indiceAtual + 1) % imagens.length;
  modalImg.src = imagens[indiceAtual].src;
});

// Botão Anterior
btnAnterior.addEventListener("click", (e) => {
  e.stopPropagation();
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  modalImg.src = imagens[indiceAtual].src;
});

