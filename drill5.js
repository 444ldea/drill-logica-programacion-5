//funcion numero secreto del 1 al 100
let numSecreto = 28;

function generacionNumSecreto() {
  let input = document.getElementById("inputNumSecreto").value;
  let resultado = document.getElementById("resultado");

  const guess = Number(input);

  if (guess === numSecreto) {
    resultado.textContent = "¡Acertaste!";
  } else {
    resultado.textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo";
  }
}
