const btnMobile = document.querySelector(".btn-mobile");
const closeBtn = document.querySelector(".close-menu");

// Funções

function toggleMenu() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.toggle("active");
}


// Eventos

btnMobile.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", closeMenu);
