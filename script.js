const menuToggle = document.querySelector(".menu-toggle");
const itemMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
    itemMenu.classList.toggle('show-menu')
});