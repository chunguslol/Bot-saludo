
import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombre_input.value;

  let saludo = "Hola";

  if (nombre) {
    saludo += " " + nombre;
  }

  div.innerHTML = "<p>" + saludo + "</p>";
});