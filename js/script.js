const btnMobile = document.querySelector(".btn-mobile");
const closeBtn = document.querySelector(".close-menu");
const subBtn = document.querySelector(".form-btn");
const links = Array.from(document.getElementsByTagName("a"));

// Funções

function toggleMenu() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.toggle("active");
}

function prevDefault(e) {
    e.preventDefault();
}

// Eventos

btnMobile.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
links.map((link) => link.addEventListener("click", prevDefault));
