console.log("main.js loaded");

const button = document.querySelector(".button");
const title = document.querySelector(".title");

button.addEventListener("click", () => {
  title.textContent = "HTML, CSS и JS успешно загрузились";
});