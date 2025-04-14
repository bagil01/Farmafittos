  // Carrossel de Destaques
  let index = 0;
  const slides = document.querySelectorAll(".slide");

  function mudarSlide() {
      slides[index].classList.remove("ativo");
      index = (index + 1) % slides.length;
      slides[index].classList.add("ativo");
  }
  setInterval(mudarSlide, 3000);

  // Carrossel de Parcerias
  const parcerias = document.querySelector(".carrossel-parcerias");
  function moverParcerias() {
      parcerias.appendChild(parcerias.firstElementChild);
  }
  setInterval(moverParcerias, 2000);
      document.addEventListener("DOMContentLoaded", function() {
          new Swiper(".swiper", {
              loop: true,
              pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
              },
              autoplay: {
                  delay: 3000,
                  disableOnInteraction: false,
              },
          });
      });
      