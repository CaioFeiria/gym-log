import { navigateToHome, navigateToUser } from "./utils.js";

const buttonWorkouts = document.getElementById("btnWorkouts");
const buttonUser = document.getElementById("btnUser");

document.addEventListener("DOMContentLoaded", () => {
  buttonWorkouts.classList.add("ativo");

});

buttonWorkouts.addEventListener("click", () => {
  if (!buttonWorkouts.classList.contains("ativo")) {
    buttonUser.classList.remove("ativo");
    navigateToHome();
  }
  buttonWorkouts.classList.add("ativo");
});

buttonUser.addEventListener("click", () => {
  if (!buttonUser.classList.contains("ativo")){
    buttonWorkouts.classList.remove("ativo");
    navigateToUser();
  }
  buttonUser.classList.add("ativo");
});
const treinos = ["TREINO A", "TREINO B", "TREINO C", "TREINO D"];
indiceAtual = 0; // Índice atual do treino visível
function mudarTreino(direcao) {
  indiceAtual += direcao; // Atualiza o índice com base na direção (1 ou -1)
  
  // Verifica se o índice saiu dos limites e ajusta
  if (indiceAtual < 0) {
    indiceAtual = treinos.length - 1; // Volta para o último treino
  } else if (indiceAtual >= treinos.length) {
    indiceAtual = 0; // Volta para o primeiro treino
  }

  // Atualiza o título do treino visível
  document.getElementById("treino-titulo").textContent = treinos[indiceAtual];
}

// Associa a função aos botões
document.querySelector(".prev").addEventListener("click", mudarTreino(-1));

document.querySelector(".next").addEventListener("click", mudarTreino(1));


