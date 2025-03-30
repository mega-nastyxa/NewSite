document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menuButton").addEventListener("click", function() {
        document.querySelector(".container__header").classList.toggle("open");
    });
});