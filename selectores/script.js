// --- SELECTORES ---
const btnSelector = document.querySelector('#btnSelector');
const textoSelector = document.querySelector('#textoSelector');

btnSelector.addEventListener('click', () => {
  textoSelector.style.color = 'purple';
  textoSelector.textContent = '¡Texto y color cambiados con un selector!';
});

// --- EVENTOS ---
const btnEvento = document.querySelector('#btnEvento');
const mensajeEvento = document.querySelector('#mensajeEvento');
const cuadroEvento = document.querySelector('#cuadro-eventos');

btnEvento.addEventListener('click', () => {
  mensajeEvento.textContent = '¡Evento click activado!';
  mensajeEvento.style.color = 'green';
});

cuadroEvento.addEventListener('mouseover', () => {
  mensajeEvento.textContent = '¡Evento mouseover activado!';
  mensajeEvento.style.color = 'blue';
});

cuadroEvento.addEventListener('mouseout', () => {
  mensajeEvento.textContent = 'Evento no activado.';
  mensajeEvento.style.color = '';
});

// --- FUNCIONES ---
const btnFuncion = document.querySelector('#btnFuncion');
const nombreInput = document.querySelector('#nombreInput');

function saludar(nombre) {
  alert(`¡Hola, ${nombre}! Esta es una función en acción.`);
}

btnFuncion.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();
  if (nombre) {
    saludar(nombre);
  } else {
    alert('Por favor, escribe tu nombre.');
  }
});