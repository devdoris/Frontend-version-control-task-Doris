document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu");
  const nav = document.querySelector("nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.textContent =
    nav.classList.contains("open") ? "✖" : "☰";
    });
  }
});
<<<<<<< HEAD
=======

>>>>>>> 49679fd51e766482154cbff367588eac57be814f
