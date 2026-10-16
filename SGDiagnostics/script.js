const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

function closeMobileMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Отвори менюто");
  mainNav.classList.remove("open");
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Отвори менюто" : "Затвори менюто");
    mainNav.classList.toggle("open", !isOpen);
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMobileMenu();
  });
}

