document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function(event) {
            event.preventDefault();
            let submenu = this.nextElementSibling;

            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });
});
