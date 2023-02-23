const menu = document.querySelector("#menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");
menu.addEventListener("click", () => {
    ul.classList.toggle("show");
  });
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expand');
  });
});
var botonesInfo = document.getElementsByClassName("boton-info");
for (var i = 0; i < botonesInfo.length; i++) {
  botonesInfo[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("info-adicional");
  });
}