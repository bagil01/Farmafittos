function toggleText(id) {
    const moreText = document.getElementById("more-" + id);
    const btn = document.getElementById("btn-" + id);

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.textContent = "Ver menos";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Ver mais";
    }
}