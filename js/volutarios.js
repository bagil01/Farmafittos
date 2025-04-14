document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const wrapper = document.querySelector(".cards-wrapper");
    const cards = document.querySelectorAll(".card-voluntarios");

    let index = 0;
    const cardWidth = 210; // Largura do cartão + margem
    const visibleCards = 4.5;
    const totalCards = cards.length;

    function updateCarousel() {
        wrapper.style.transition = "transform 0.5s ease-in-out";
        wrapper.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < totalCards - visibleCards) {
            index++;
        } else {
            index = 0; // Volta ao primeiro
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } 
        updateCarousel();
    });
});
