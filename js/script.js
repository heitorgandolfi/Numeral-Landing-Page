const btnMobile = document.querySelector(".btn-mobile");

const closeBtn = document.querySelector(".close-menu");

const subBtn = document.querySelector(".form-btn");

const link = document.getElementsByTagName("a");

// Funções

function toggleMenu() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.toggle("active");
}

function prevDefault(e) {
    e.preventDefault();
}

// Eventos

btnMobile.addEventListener("click", toggleMenu);

closeBtn.addEventListener("click", closeMenu);

subBtn.addEventListener("click", prevDefault);

for (i = 0; i <= link.length; i++) {
    link[i].addEventListener("click", prevDefault);
}
