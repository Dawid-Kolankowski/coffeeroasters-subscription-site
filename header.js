const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const body = document.body;
const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener("click", function () {
  console.log(overlay);
  header.classList.toggle("open");
  body.classList.toggle("no-scroll");
});

overlay.addEventListener("click", function () {
  header.classList.toggle("open");
  body.classList.toggle("no-scroll");
});
