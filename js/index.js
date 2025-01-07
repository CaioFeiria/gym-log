// import { getLocalStorage, addOrUpdateLocalStorage } from "./localStorage";
// import { createOptionsSelect } from "./elements";

const containerList = document.getElementById("containerNewListExercise");
const inputList = document.getElementById("input-listExercise");
const containerExercise = document.getElementById("containerExercise");

document.addEventListener("DOMContentLoaded", () => {
  containerList.classList.add("noView");
  containerExercise.classList.add("noView");
  // createOptionsSelect();
});

document.getElementById("btn-openListExercise").addEventListener("click", () => {
  if (containerList.classList.contains("noView")){
    containerList.classList.remove("noView");
  }else
    containerList.classList.add("noView");
});

document.getElementById("btn-newListExercise").addEventListener("click", () => {
  // validar campo input
  containerExercise.classList.remove("noView");
  inputList.setAttribute("disabled", "");
  inputList.style.cursor = "not-allowed";
  // mostrar campo de cadastro dos exercicios da lista
});