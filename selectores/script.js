// SELECTORES
const titulo = document.querySelector("#titulo");
const botonColor = document.querySelector("#botonColor");
const botonSaludo = document.querySelector("#botonSaludo");
const nombreInput = document.querySelector("#nombreInput");
const saludo = document.querySelector("#saludo");

// EVENTOS Y FUNCIONES
botonColor.addEventListener("click", cambiarColor);
botonSaludo.addEventListener("click", mostrarSaludo);

function cambiarColor() {
  // Cambia el color del título al azar
  const colores = ["red", "blue", "green", "purple", "orange"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  titulo.style.color = colorAleatorio;
}

function mostrarSaludo() {
  const nombre = nombreInput.value;
  if (nombre.trim() === "") {
    saludo.textContent = "Por favor, escribe tu nombre.";
  } else {
    saludo.textContent = `¡Hola, ${nombre}!`;
  }
}
