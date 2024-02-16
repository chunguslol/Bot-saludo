
import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_select = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombre_input.value;
  const edad = parseInt(edad_input.value);
  const genero = genero_select.value;

  let saludo = "Hola";

  if (nombre) {
    saludo += " " + nombre;
  }

  if (edad > 30) {
    if (genero === "femenino") {
      saludo = "Hola Sra. " + nombre;
    } else {
      saludo = "Hola Sr. " + nombre;
    }
  } else if (edad <= 30) {
    saludo = " Hola Joven " + nombre;
  }


  div.innerHTML = "<p>" + saludo + "</p>";

});