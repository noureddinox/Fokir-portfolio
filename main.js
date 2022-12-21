const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})