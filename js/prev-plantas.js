document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".card-img img");
    let currentIndex = 0;

    function changeImage() {
        images.forEach((img, index) => {
            img.classList.remove("active");
        });

        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 10000); // Troca a cada 10s
});
